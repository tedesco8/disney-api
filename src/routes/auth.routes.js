const { Router } = require("express")

module.exports = function ({ AuthController }) {
  const router = Router()

  router.post("/signup", AuthController.signIn)
  router.post("/signin", AuthController.signUp)

  return router
};