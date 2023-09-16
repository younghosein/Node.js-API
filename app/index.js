const express = require ('express');

const app = express();

module.exports = class Application {
    constructor() {
        this.configServer();
    }

    configServer() {
        app.get('/',(req, res)=> {
            res.end('<h1>THIS IS HOME ROUTE</h1>')
        })


        app.listen(3000, (err) => {
            if (err) console.log(err)
            console.log('SERVER RUN ON PORT 3000')
        })
    }
}