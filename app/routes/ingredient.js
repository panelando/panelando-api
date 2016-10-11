import { Router } from 'express'
import { models } from 'lib/database'
import restful from 'controllers/restful'

const { index, show, create, update, remove } = restful(models.ingredient)
const router = new Router()

router.get('/', index)
router.get('/:id', show)
router.post('/', create)
router.put('/:id', update)
router.delete('/:id', remove)

export default router

