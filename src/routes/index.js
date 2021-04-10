const express = require("express")
const cors = require("cors")
const helmet = require("helmet")
const compression = require("compression")
const morgan = require("morgan")
require("express-async-errors")
const { NotFoundMiddleware, ErrorMiddleware } = require("../middlewares");

module.exports = function ({ FilmRoutes, CharacterRoutes, UserRoutes }) { 
  const router = express.Router()
  const apiRoutes = express.Router()

  apiRoutes
    .use(cors())
    .use(express.json())
    .use(morgan("dev"))
    .use(helmet())
    .use(compression());

    apiRoutes.use("/character", CharacterRoutes)
    apiRoutes.use("/user", UserRoutes)
    apiRoutes.use("/film", FilmRoutes)

    router.use("/v1/api", apiRoutes)
    
    router.use(NotFoundMiddleware);
    router.use(ErrorMiddleware);

    return router
};
