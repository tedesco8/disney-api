const { Router } = require("express")
const { AuthMiddleware, CacheMiddleware } = require("../middlewares")
const { CACHE_TIME } = require("../helpers");

module.exports = function ({ UserController }) {
  const router = Router()

  router.get("/:userId", AuthMiddleware, UserController.get)
  router.get("", [AuthMiddleware, CacheMiddleware(CACHE_TIME.ONE_HOUR)], UserController.getAll)
  router.put("/:userId", AuthMiddleware, UserController.update)
  router.post("", AuthMiddleware, UserController.create)
  router.delete("/:userId", AuthMiddleware, UserController.delete)

  return router
};
