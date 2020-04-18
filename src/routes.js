import { Router } from 'express'
import * as blogController from './controllers/blog'

const router = Router()

router.get('/blogs', blogController.get)

export default router
