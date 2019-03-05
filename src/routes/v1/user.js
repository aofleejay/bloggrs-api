import { Router } from 'express'
import * as v1 from '../../controllers/v1/user'

const router = Router()

router.get('/users', v1.getUsers)
router.get('/users/:id', v1.getUserById)
router.post('/users', v1.createUser)
router.put('/users/:id', v1.updateUser)
router.delete('/users/:id', v1.deleteUser)

export default router
