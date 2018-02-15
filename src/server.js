import express from 'express'

const app = express()

app.get('/users', (req, res) => {
  res.json([{ name: 'Aof' }])
})

app.listen(4000, () => console.log('Server started.'))
