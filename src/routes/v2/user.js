import { Router } from 'express'
import * as v2 from '../../controllers/v2/user'

const router = Router()

router.get('/users', v2.getUsers)
router.get('/users/:id', v2.getUserById)
router.post('/users', v2.createUser)
router.put('/users/:id', v2.updateUser)
router.delete('/users/:id', v2.deleteUser)

export default router
