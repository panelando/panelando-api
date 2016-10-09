import { TEXT } from 'sequelize'
import database from 'lib/database'

const model = database.define('comment', {
  text: {
    type: TEXT,
    allowNull: false
  }
})

export default model
