import logger from 'lib/logger'
import database from 'lib/database'
import app from './app'

const port = 3000

const syncDatabase = () => database.sync({ force: true })
const logServer = () => logger.info(`Listening on port ${port}`)
const startServer = () => app.listen(port, logServer)

Promise.resolve()
  .then(syncDatabase)
  .then(startServer)
