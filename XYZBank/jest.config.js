module.exports = {
    globalSetup: './SetupAndTeardown/setup.js',
    globalTeardown: './SetupAndTeardown/teardown.js',
    testEnvironment: './SetupAndTeardown/puppeteer_environment.js',
    testTimeout: 60000,
    setupFilesAfterEnv: ['./SetupAndTeardown/setup-jest.js'],
    reporters: [
        "default",
        [
          "jest-stare",
          {
            "resultDir": "results/jest-stare",
            "reportTitle": "XYZ Bank Test Report",
            "additionalResultsProcessors": [
              "jest-junit"
            ],
            "coverageLink": "../../coverage/lcov-report/index.html",
            "jestStareConfigJson": "jest-stare.json",
            "jestGlobalConfigJson": "globalStuff.json"
          }
        ]
    ]
};