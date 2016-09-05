import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

let app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(morgan('dev'))

export default app
