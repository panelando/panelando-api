import Sequelize from 'sequelize'
import { mapObjIndexed, merge } from 'ramda'
import config from '../config/database'
import models from '../models'

const database = new Sequelize(config)

const createInstances = model => {
  let instance = model.create(database)

  return { model, instance }
}

const associateModels = ({ model, instance }) => {
  if (model.associate) {
    model.associate(instance, database.models)
  }
}

export const initializeModels = () =>
  models.map(createInstances).map(associateModels)

export default database

