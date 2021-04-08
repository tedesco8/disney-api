const { createContainer, asClass, asValue, asFunction } = require("awilix")

//config
const config = require("../config")
const app = require(".")

//services
const { HomeService, UserService } = require("../services")

//controllers
const { HomeController, UserController } = require("../controllers")

//routes
const { HomeRoutes, UserRoutes } = require("../routes/index.routes")
const Routes = require("../routes")

//models
const { User } = require("../models")

//repositories
const { UserRepository } = require("../repositories")

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
    HomeService: asClass(HomeService).singleton(),
    UserService: asClass(UserService).singleton(),
  })
  //controllers
  .register({
    //le agregamos el metodo bind para que no pierda el scope
    HomeController: asClass(HomeController.bind(HomeController)).singleton(),
    UserController: asClass(UserController.bind(UserController)).singleton(),
  })
  //rutas
  .register({
    //as function porque devolvemos una funcion, no una clase.
    HomeRoutes: asFunction(HomeRoutes).singleton(),
    UserRoutes: asFunction(UserRoutes).singleton(),
  })
  //modelos
  .register({
    User: asValue(User)
  })
  //repositories
  .register({
    UserRepository: asClass(UserRepository).singleton()
  })

module.exports = container
