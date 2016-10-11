import Sequelize from 'sequelize'
import R, { mapObjIndexed, merge } from 'ramda'
import config from '../config/database'
import rawModels from '../models'

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

const initializeModels = () =>
  rawModels.map(createInstances).map(associateModels)

initializeModels()

export const models = database.models
export default database

