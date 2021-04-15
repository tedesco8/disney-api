const { Router } = require("express")
const { AuthMiddleware } = require("../middlewares")

module.exports = function ({ UserController }) {
  const router = Router()

  router.get("/:userId", AuthMiddleware, UserController.get)
  router.get("", [AuthMiddleware], UserController.getAll)
  router.put("/:userId", AuthMiddleware, UserController.update)
  router.post("", AuthMiddleware, UserController.create)
  router.delete("/:userId", AuthMiddleware, UserController.delete)

  return router
};
