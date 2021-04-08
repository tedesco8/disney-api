const Sequelize = require('sequelize')
require('dotenv').config()

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mariadb', 
    dialectOptions: {
        timezone: 'Etc/GMT+7',
    },
    define:{
        timestimps: false
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    // logging: false,
    operatorAliases: false
 })

 sequelize
  .authenticate()
  .then(function(err) {
    console.log('Conectado a la base de datos.')
  })
  .catch(function (err) {
    console.log('Error en la conexion a la base de datos:', err)
  })

  module.exports = sequelize