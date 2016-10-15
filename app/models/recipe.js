import { STRING, INTEGER, ENUM } from 'sequelize'

function create (database) {
  return database.define('recipe', {
    name: {
      type: STRING,
      allowNull: false
    },

    description: {
      type: STRING,
      allowNull: false
    },

    image: {
      type: STRING,
      allowNull: false
    },

    preparationTime: {
      type: INTEGER,
      allowNull: false,
      validate: {
        min: 1
      }
    },

    level: {
      type: ENUM(['very_easy', 'easy', 'medium', 'hard', 'very_hard']),
      allowNull: false
    }
  })
}

function associate (recipe, { ingredient, instruction, tag, menu, user }) {
  recipe.hasMany(ingredient)
  recipe.hasMany(instruction)
  recipe.belongsToMany(menu, { through: 'recipes_menus' })
  recipe.belongsToMany(tag, { through: 'recipes_tags' })
  recipe.belongsToMany(user, { through: 'recommendations' })
}

export default { create, associate }

