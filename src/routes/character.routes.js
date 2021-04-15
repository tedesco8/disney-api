const { Router } = require("express")
const { AuthMiddleware } = require("../middlewares")

module.exports = function ({ CharacterController }) {
  const router = Router()

  router.get("/:characterId", AuthMiddleware, CharacterController.get)
  router.get("", [AuthMiddleware], CharacterController.getAll)
  router.put("/:characterId", AuthMiddleware, CharacterController.update)
  router.post("", AuthMiddleware, CharacterController.create)
  router.delete("/:characterId", AuthMiddleware, CharacterController.delete)

  return router
};