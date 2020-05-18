const express = require('express')
const { join } = require('path')
const app = express()

// app.get('/greeting', (req, res) => {
//   res.sendFile(join(__dirname, 'index.html'))
// })

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'about.html'))
})

app.get('/portfolio', (req, res) => {
  res.sendFile(join(__dirname, 'portfolio.html'))
})

app.get('/contact', (req, res) => {
  res.sendFile(join(__dirname, 'contact.html'))
})

app.listen(3000, () => {
  console.log('http://localhost:3000')
})
