import { STRING } from 'sequelize'

function create (database) {
  return database.define('menu', {
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

function associate (database) {}

export default { create, associate }

