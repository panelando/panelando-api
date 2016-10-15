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

function associate (menu, { recipe }) {
  menu.belongsToMany(recipe, { through: 'recipes_menus' })
}

export default { create, associate }

