// var http = require('http')
// var fs = require('fs')

// http
//   .createServer(function (req, res) {
//     // const text = fs.readFileSync('./content/big.txt', 'utf8')
//     // res.end(text)
//     const fileStream = fs.createReadStream('./content/test2.txt', 'utf8')
//     fileStream.on('open', () => {
//       fileStream.pipe(res)
//     })
//     fileStream.on('error', (err) => {
//       res.end(err)
//     })
//   })
//   .listen(5000)


var http = require('http');
var fs = require('fs');
const { error } = require('console');

http.createServer(function (req, res){
    const fileStream = fs.createReadStream('./content/test2.txt', 'utf8');
    fileStream.on('open', ()=>{
        fileStream.pipe(res)
    });
    fileStream.on('err',(error)=>{
        console.log(error)
    } )
} ).listen(5000)