const express = require('express')
const bodyParser = require('body-parser')

const notes = []
const app = express()

app.use(bodyParser.json())

app.post('/notes', (req, res) => {
  notes.push(req.body)
  res.sendStatus(201)
})

app.listen(3000, () => console.log('Listening on 3000!'))
