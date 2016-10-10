import { TEXT } from 'sequelize'

function create (database) {
  return database.define('comment', {
    text: {
      type: TEXT,
      allowNull: false
    }
  })
}

export default { create }
