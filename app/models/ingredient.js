import { STRING } from 'sequelize'

function create (database) {
  return database.define('ingredient', {
    name: {
      type: STRING,
      allowNull: false
    },

    amount: {
      type: STRING,
      allowNull: false
    }
  })
}

export default { create }

