const {readFile} = require('fs').promises;
const os = require('os');
const path = require('path');
const puppeteer = require('puppeteer');
const NodeEnvironment = require('jest-environment-node').TestEnvironment;

const DIR = path.join(os.tmpdir(), 'jest_puppeteer_global_setup');

class PuppeteerEnvironment extends NodeEnvironment {
  constructor(config) {
    super(config);
  }

  async setup() {
    await super.setup();

    const wsEndpoint = await readFile(path.join(DIR, 'wsEndpoint'), 'utf8');
    if (!wsEndpoint) {
      throw new Error('wsEndpoint not found');
    }

    this.global.__BROWSER_GLOBAL__ = await puppeteer.connect({
      browserWSEndpoint: wsEndpoint,
    });

    this.global.page = await globalThis.__BROWSER_GLOBAL__.newPage();
    await this.global.page.setViewport({
      width: 900,
      height: 900
    });
  }

  async teardown() {
    if (this.global.__BROWSER_GLOBAL__) {
      await this.global.page.close();
      this.global.__BROWSER_GLOBAL__.disconnect();
    }
    await super.teardown();
  }
}

module.exports = PuppeteerEnvironment;