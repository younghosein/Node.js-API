//creating server
const http = require('http');

http.createServer((req , res)=> {
    res.writeHead('200', {
        'content-type':'text/html',
        'server':'nodejs'
    })
    res.end('<h1>MEOW YOU DOG</h1>')
}).listen(8000, (err)=>{
    if(err)
        console.log(err)
    console.log('server run on port 8000...')
})
