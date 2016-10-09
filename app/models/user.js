import { STRING } from 'sequelize'
import database from 'lib/database'

const model = database.define('tag', {
  name: {
    type: STRING,
    allowNull: false
  }
})

export default model
