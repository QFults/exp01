const http = require('http')
const { readFile } = require('fs')
const { promisify } = require('util')

const rf = promisify(readFile)

// const server = http.createServer((req, res) => {
//   switch (req.url) {
//     case '/movies':
//       res.end('Favorite Movies')
//       break
//     case '/songs':
//       res.end('Favorite Songs')
//       break
//     case '/foods':
//       res.end('Favorite Foods')
//       break
//     case '/games':
//       res.end('Favorite Games')
//       break
//   }
// })
// const server = http.createServer((req, res) => {
//   const pieces = req.url.split('/')
//   const op = pieces[1]
//   const a = parseInt(pieces[2])
//   const b = parseInt(pieces[3])

//   switch (op) {
//     case 'add':
//       res.end(`${a + b}`)
//       break
//     case 'subtract':
//       res.end(`${a - b}`)
//       break
//     case 'multiply':
//       res.end(`${a * b}`)
//       break
//     case 'divide':
//       res.end(`${a / b}`)
//       break
//   }
// })

const server = http.createServer((req, res) => {
  rf('index.html', 'utf8')
    .then(html => {
      res.end(html)
    })
    .catch(err => console.log(err))
})

server.listen(3000, () => {
  console.log('http://localhost:3000')
})
