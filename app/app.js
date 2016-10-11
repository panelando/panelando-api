import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

import category from './routes/category'
import comment from './routes/comment'
import ingredient from './routes/ingredient'
import instruction from './routes/instruction'
import menu from './routes/menu'
import recipe from './routes/recipe'
import tag from './routes/tag'
import user from './routes/user'

let app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(morgan('dev'))

app.use('/categories', category)
app.use('/comments', comment)
app.use('/ingredients', ingredient)
app.use('/instructions', instruction)
app.use('/menus', menu)
app.use('/recipes', recipe)
app.use('/tags', tag)
app.use('/users', user)

export default app

