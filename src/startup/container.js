const { createContainer, asClass, asValue, asFunction } = require("awilix")

//config
const config = require("../config")
const app = require(".")

//services
const { FilmService, CharacterService, UserService } = require("../services")

//controllers
const { FilmController, CharacterController, UserController } = require("../controllers")

//routes
const { FilmRoutes, CharacterRoutes, UserRoutes } = require("../routes/index.routes")
const Routes = require("../routes")

//models
const { Performances, Film, Character, User } = require("../models")

//repositories
const { FilmRepository, CharacterRepository, UserRepository } = require("../repositories")

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
    FilmService: asClass(FilmService).singleton()
  })
  //controllers
  .register({
    //le agregamos el metodo bind para que no pierda el scope
    CharacterController: asClass(CharacterController.bind(CharacterController)).singleton(),
    UserController: asClass(UserController.bind(UserController)).singleton(),
    FilmController: asClass(FilmController.bind(FilmController)).singleton()
  })
  //rutas
  .register({
    //as function porque devolvemos una funcion, no una clase.
    CharacterRoutes: asFunction(CharacterRoutes).singleton(),
    UserRoutes: asFunction(UserRoutes).singleton(),
    FilmRoutes: asFunction(FilmRoutes).singleton()
  })
  //modelos
  .register({
    User: asValue(User),
    Character: asValue(Character),
    Performances: asValue(Performances),
    Film: asValue(Film)
  })
  //repositories
  .register({
    UserRepository: asClass(UserRepository).singleton(),
    CharacterRepository: asClass(CharacterRepository).singleton(),
    FilmRepository: asClass(FilmRepository).singleton()
  })

module.exports = container
