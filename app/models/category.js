import { STRING } from 'sequelize'

function create (database) {
  return database.define('category', {
    name: {
      type: STRING,
      allowNull: false
    },

    description: {
      type: STRING,
      allowNull: false
    }
  })
}

export default { create }

