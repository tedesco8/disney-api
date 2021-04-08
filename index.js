const container = require("./src/startup/container")
const sequelize = require("./src/config/database")
const server = container.resolve("app")
const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = container.resolve("config")

require('dotenv').config()

server.start()