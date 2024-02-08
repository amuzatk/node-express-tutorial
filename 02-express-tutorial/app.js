const http = require('http')
const {readFileSync} = require('fs')

const helloWorld = readFileSync('./index.html')

const server = http.createServer((req,res)=>{
    // console.log(req.url)
    if(req.url === '/'){
    res.writeHead(200, {'content-type':'text/html'})
    res.write(helloWorld)
    res.end()
} else {
    res.writeHead(200, { 'content-type': 'text/html'})
    res.write('NOT FOUND')
    res.end()
}
})

server.listen(5000)