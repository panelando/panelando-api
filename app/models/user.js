import { STRING } from 'sequelize'

function create (database) {
  return database.define('user', {
    name: {
      type: STRING,
      allowNull: false
    }
  })
}

function associate (user, { comment, recipe }) {
  user.hasMany(comment)
  user.hasMany(recipe)
  user.belongsToMany(recipe, { through: 'recommendations' })
}

export default { create, associate }

