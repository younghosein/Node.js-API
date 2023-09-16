const http = require('http');

module.exports = class Application {
    constructor() {
        this.configServer();
    }

    configServer() {
        const server = http.createServer((req, res) => {
            res.setHeader('node.js', {
                'content-type': 'text/html'
            })

            res.end('<h1>THIS IS A TEXT</h1>')
        })

        server.listen(3000, (err) => {
            if (err) console.log(err)
            console.log('SERVER RUN ON PORT 3000')
        })
    }
}