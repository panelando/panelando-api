import Sequelize from 'sequelize'
import config from '../config/database'

const database = new Sequelize(config)

export default database
