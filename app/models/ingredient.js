import { STRING } from 'sequelize'
import database from 'lib/database'

const model = database.define('ingredient', {
  name: {
    type: STRING,
    allowNull: false
  },

  amount: {
    type: STRING,
    allowNull: false
  }
})

export default model

