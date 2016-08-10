import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'
import { getLogger } from 'log4js'

const logger = getLogger()

class App {
  constructor(app) {
    this.app = app
    this.useCors()
    this.parseBody()
    this.morgan()
    this.init()
  }

  useCors() {
    this.app.use(cors())
  }

  parseBody() {
    this.app.use(bodyParser.json())
  }

  morgan() {
    this.app.use(morgan('dev'))
  }

  init() {
    return this.app.listen(3000, () => logger.info('Listening on port 3000'))
  }
}

export const app = new App(express())
