import { Router } from 'express'
import { index, show, create, update, remove } from 'controllers/recipe'

const router = new Router()

router.get('/', index)
router.get('/:id', show)
router.post('/', create)
router.put('/:id', update)
router.delete('/:id', remove)

export default router
