// API HTTP Request Methods

const axios = require('axios');
class APIRequestMethods{

    /**
     * GET HTTP Request Method
     * @param {string} URL 
     * @returns response
     */
    async get(URL){
        let res;
        await axios.get(`https://reqres.in${URL}`)
        .then(function (response) 
        { 
            res = {status: response.status, data: response.data.data};
        })
        .catch(function (error) 
        { 
            res = {status: error.response.status, data: error.response.data};
        });
        return res;
    }

    /**
     * POST HTTP Request Method
     * @param {string} URL 
     * @param {object} obj 
     * @returns response
     */
    async post(URL, obj){
        let res;
        await axios.post(`https://reqres.in${URL}`, obj)
        .then(function (response) 
        { 
            res = response;
        })
        .catch(function (error) 
        { 
            res = {status: error.response.status, data: error.response.data};
        });
        return res;
    }

    /**
     * PUT HTTP Request Method
     * @param {string} URL 
     * @param {object} obj 
     * @returns response
    */
    async put(URL, obj){
        let res;
        await axios.put(`https://reqres.in${URL}`, obj)
        .then(function (response) 
        { 
            res = response;
        })
        .catch(function (error) 
        { 
            res = {status: error.response.status, data: error.response.data};
        });
        return res;
    }

    /**
     * PATCH HTTP Request Method
     * @param {string} URL 
     * @param {object} obj 
     * @returns response
    */
    async patch(URL, obj){
        let res;
        await axios.patch(`https://reqres.in${URL}`, obj)
        .then(function (response) 
        { 
            res = response;
        })
        .catch(function (error) 
        { 
            res = {status: error.response.status, data: error.response.data};
        });
        return res;
    }

    /**
     * DELETE HTTP Request Method
     * @param {string} URL 
     * @returns response
    */
    async Delete(URL){
        let res;
        await axios.delete(`https://reqres.in${URL}`)
        .then(function (response) 
        { 
            res = response;
        })
        .catch(function (error) 
        { 
            res = {status: error.response.status, data: error.response.data};
        });
        return res;
    }
}
module.exports = APIRequestMethods;