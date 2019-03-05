import { Router } from 'express'
import * as v1 from './v1'
import * as v2 from './v2'

const router = Router()

router.use('/v1', v1.user)
router.use('/v2', v2.user)

export default router
