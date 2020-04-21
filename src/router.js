import { Router } from 'express'
import * as blogController from './controllers/blog'

const getRouter = () => {
  const router = Router()

  router.get('/blogs', blogController.get)
  router.get('/blogs/:id', blogController.getById)
  router.post('/blogs', blogController.create)
  router.put('/blogs/:id', blogController.update)
  router.delete('/blogs/:id', blogController.remove)

  return router
}

export { getRouter }
