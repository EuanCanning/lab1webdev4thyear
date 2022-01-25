const http = require('http')
const fs = require('fs')
const server = http.createServer((req, res) => {
 res.writeHead(200, { 'content-type': 'text/html' })
 const PORT = process.env.PORT || 3000;

 
 fs.createReadStream('4thyeartest').pipe(res)
})
server.listen(PORT)
console.log('Server running at port $ { PORT } ');