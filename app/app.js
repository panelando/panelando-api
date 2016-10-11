import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'
import menus from './routes/menu'

let app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(morgan('dev'))

app.use('/menus', menus)

export default app
