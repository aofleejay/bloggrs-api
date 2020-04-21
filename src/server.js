import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import * as database from './database'
import { getRouter } from './router'

const startServer = async ({ port = process.env.NODE_PORT } = {}) => {
  try {
    await database.connect()
    console.log('Database connected.')

    try {
      const app = express()
      app.use(cors())
      app.use(bodyParser.urlencoded({ extended: false }))
      app.use(bodyParser.json())

      const router = getRouter()
      app.use('/api', router)

      const server = app.listen(port, () => {
        console.log(`Listening on port ${server.address().port}.`)
      })
    } catch (error) {
      console.error('Cannot start server.', error)
    }
  } catch (error) {
    console.error('Cannot connect to database.', error)
  }
}

startServer()
