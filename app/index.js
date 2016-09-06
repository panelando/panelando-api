import logger from './lib/logger'
import app from './app'

const port = 3000

app.listen(port, () => logger.info(`Listening on port ${port}`))

