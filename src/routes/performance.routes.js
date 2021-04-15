const { Router } = require("express")
const { AuthMiddleware, CacheMiddleware } = require("../middlewares")
const { CACHE_TIME } = require("../helpers");

module.exports = function ({ PerformanceController }) {
  const router = Router()

  router.get("/:performanceId", AuthMiddleware, PerformanceController.get)
  router.get("", [AuthMiddleware, CacheMiddleware(CACHE_TIME.ONE_HOUR)], PerformanceController.getAll)
  router.put("/:performanceId", AuthMiddleware, PerformanceController.update)
  router.post("", AuthMiddleware, PerformanceController.create)
  router.delete("/:performanceId", AuthMiddleware, PerformanceController.delete)

  return router
};