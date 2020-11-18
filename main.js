
const express = require('express')
const app = express()
const path = require('path')



var port = 5100

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'))
  })
  app.use(express.static(__dirname))
  app.use(express.static('assets'))
  app.use(express.static('css'))
  app.use(express.static('js'))

  console.log(`Listening on ${port}`)
  app.listen(port)


  