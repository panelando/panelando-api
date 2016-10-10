import { TEXT } from 'sequelize'

function create (database) {
  return database.define('instruction', {
    description: {
      type: TEXT,
      allowNull: false
    }
  })
}

export default { create }

