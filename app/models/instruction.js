import { TEXT } from 'sequelize'
import database from 'lib/database'

const model = database.define('instruction', {
  description: {
    type: TEXT,
    allowNull: false
  }
})

export default model
