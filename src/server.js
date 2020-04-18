import express from 'express'
import { MongoClient } from 'mongodb'
import bodyParser from 'body-parser'

// import routes from './routes'

const client = new MongoClient(process.env.DATABASE_CONNECTION)

client.connect((error) => {
  if (error) {
    console.error(`Cannot connect to ${url}`, error)
  } else {
    console.log('Connected successfully to database.')
    const app = express()

    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())
    // app.use(routes)

    app.listen(4000, () => console.log('Server started.'))
  }
})
