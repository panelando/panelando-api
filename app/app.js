import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'
import menus from './routes/menu'
import tags from './routes/tag'
import recipes from './routes/recipe'

let app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(morgan('dev'))

app.use('/menus', menus)
app.use('/tags', tags)
app.use('/recipes', recipes)

export default app
