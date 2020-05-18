const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/greeting') {
    res.end('Hello!')
  }
})

server.listen(3000, () => {
  console.log('http://localhost:3000')
})
