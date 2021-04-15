const { Router } = require("express")
const { AuthMiddleware, CacheMiddleware } = require("../middlewares")
const { CACHE_TIME } = require("../helpers")

module.exports = function ({ CharacterController }) {
  const router = Router()

  router.get("/:characterId", AuthMiddleware, CharacterController.get)
  router.get("", [AuthMiddleware, CacheMiddleware(CACHE_TIME.ONE_HOUR)], CharacterController.getAll)
  router.put("/:characterId", AuthMiddleware, CharacterController.update)
  router.post("", AuthMiddleware, CharacterController.create)
  router.delete("/:characterId", AuthMiddleware, CharacterController.delete)

  return router
};