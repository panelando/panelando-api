import { STRING } from 'sequelize'
import database from 'lib/database'

const model = database.define('menu', {
  name: STRING,
  description: STRING
})

export default model
