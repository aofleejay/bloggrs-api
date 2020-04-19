import { Router } from 'express'
import * as blogController from './controllers/blog'

const getRouter = () => {
  const router = Router()

  router.get('/blogs', blogController.get)

  return router
}

export { getRouter }
