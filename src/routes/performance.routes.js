const { Router } = require("express")
const { AuthMiddleware } = require("../middlewares")

module.exports = function ({ PerformanceController }) {
  const router = Router()

  router.get("/:performanceId", AuthMiddleware, PerformanceController.get)
  router.get("", [AuthMiddleware], PerformanceController.getAll)
  router.put("/:performanceId", AuthMiddleware, PerformanceController.update)
  router.post("", AuthMiddleware, PerformanceController.create)
  router.delete("/:performanceId", AuthMiddleware, PerformanceController.delete)

  return router
};