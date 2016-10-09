import { Router } from 'express'
import model from 'models/ingredient'
import resftul from 'controllers/restful'

const { index, show, create, update, remove } = restful(model)
const router = new Router()

router.get('/', index)
router.get('/:id', show)
router.post('/', create)
router.put('/:id', update)
router.delete('/:id', remove)

export default router

