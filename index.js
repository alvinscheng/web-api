const express = require('express')
const bodyParser = require('body-parser')

const notes = []
let noteID = 1
const app = express()

app.use(bodyParser.json())

app.post('/notes', (req, res) => {
  req.body.id = noteID++
  notes.push(req.body)
  res.sendStatus(201)
})

app.get('/notes', (req, res) => res.json(notes))

app.put('/notes/:id', (req, res) => {
  const note = notes.find(note => {
    return note.id === Number(req.params.id)
  })
  if (!note) {
    res.sendStatus(404)
  }
  Object.assign(note, req.body)
  res.sendStatus(200)
})

app.listen(3000, () => console.log('Listening on 3000!'))
