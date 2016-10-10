import { STRING } from 'sequelize'

function create (database) {
  return database.define('user', {
    name: {
      type: STRING,
      allowNull: false
    }
  })
}

export default { create }

