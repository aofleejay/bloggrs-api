import { Router } from 'express'
import expressRoutesVersioning from 'express-routes-versioning'
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from '../controllers/user'

const router = Router()
const routesVersioning = expressRoutesVersioning()

router.use((req, res, next) => {
  req.version = req.header('accept-version') || '2.0.0'
  next()
})

const APIVersionNotExist = (req, res) => {
  res.formatter.notFound([
    { message: 'API version not exist.' },
  ])
}

router.get('/users', routesVersioning({
  "1.0.0": getUsers,
  "2.0.0": getUsers,
}, APIVersionNotExist))
router.get('/users/:id', getUserById)
router.post('/users', createUser)
router.put('/users/:id', updateUser)
router.delete('/users/:id', deleteUser)

export default router
