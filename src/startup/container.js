const { createContainer, asClass, asValue, asFunction } = require("awilix")

//config
const config = require("../config")
const app = require(".")

//services
const { CharacterService, UserService } = require("../services")

//controllers
const { CharacterController, UserController } = require("../controllers")

//routes
const { CharacterRoutes, UserRoutes } = require("../routes/index.routes")
const Routes = require("../routes")

//models
const { User } = require("../models")

//repositories
const { CharacterRepository, UserRepository } = require("../repositories")

const container = createContainer()

//inyectamos las dependencias
container
  //config
  .register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config),
  })
  //servicios
  .register({
    CharacterService: asClass(CharacterService).singleton(),
    UserService: asClass(UserService).singleton(),
  })
  //controllers
  .register({
    //le agregamos el metodo bind para que no pierda el scope
    CharacterController: asClass(CharacterController.bind(CharacterController)).singleton(),
    UserController: asClass(UserController.bind(UserController)).singleton(),
  })
  //rutas
  .register({
    //as function porque devolvemos una funcion, no una clase.
    CharacterRoutes: asFunction(CharacterRoutes).singleton(),
    UserRoutes: asFunction(UserRoutes).singleton(),
  })
  //modelos
  .register({
    User: asValue(User)
  })
  //repositories
  .register({
    UserRepository: asClass(UserRepository).singleton(),
    CharacterRepository: asClass(CharacterRepository).singleton(),
  })

module.exports = container
