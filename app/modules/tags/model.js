import { STRING } from 'sequelize'
import database from 'lib/database'

const model = database.define('tag', {
  name: STRING
})

export default model
