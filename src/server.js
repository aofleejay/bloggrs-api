import express from 'express'
import bodyParser from 'body-parser'

import * as database from './database'
import routes from './routes'

const main = async () => {
  try {
    await database.connect()
    console.log('Database connected.')

    try {
      const app = express()

      app.use(bodyParser.urlencoded({ extended: false }))
      app.use(bodyParser.json())

      app.use(routes)

      app.listen(4000, () => {
        console.log('Server started.')
      })
    } catch (error) {
      console.error('Cannot start server.', error)
    }
  } catch (error) {
    console.error('Cannot connect to database.', error)
  }
}

main()
