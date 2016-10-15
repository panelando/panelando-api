import { STRING } from 'sequelize'

function create (database) {
  return database.define('tag', {
    name: {
      type: STRING,
      allowNull: false
    }
  })
}

function associate (tag, { recipe }) {
  tag.belongsToMany(recipe, { through: 'recipes_tags' })
}

export default { create, associate }

