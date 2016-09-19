import { STRING, INTEGER, ENUM } from 'sequelize'
import database from 'lib/database'

const model = database.define('recipe', {
  name: {
    type: STRING,
    allowNull: false
  },

  description: {
    type: STRING,
    allowNull: false
  },

  image: {
    type: STRING,
    allowNull: false
  },

  preparationTime: {
    type: INTEGER,
    allowNull: false,
    validate: {
      min: 1
    }
  },

  level: {
    type: ENUM(['very_easy', 'easy', 'medium', 'hard', 'very_hard']),
    allowNull: false
  }
})

export default model
