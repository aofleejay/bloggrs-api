import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import responseEnhancer from 'expressjs-response'
import routes from './routes'

mongoose.connect('mongodb://database/user')
const db = mongoose.connection
db.on('error', err => console.log(`Fail to connect database with error ${err}.`))
db.once('open', () => console.log('Database connected.'))

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(responseEnhancer())
app.use(routes)

app.listen(4000, () => console.log('Server started.'))
