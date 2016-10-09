import { STRING } from 'sequelize'
import database from 'lib/database'

const model = database.define('category', {
  name: {
    type: STRING,
    allowNull: false
  },

  description: {
    type: STRING,
    allowNull: false
  }
})

export default model
