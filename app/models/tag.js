import { STRING } from 'sequelize'

function create (database) {
  return database.define('tag', {
    name: {
      type: STRING,
      allowNull: false
    }
  })
}

export default { create }

