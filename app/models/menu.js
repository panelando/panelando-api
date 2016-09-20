import { STRING } from 'sequelize'
import database from 'lib/database'

const model = database.define('menu', {
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
