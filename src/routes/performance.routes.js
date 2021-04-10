const { Router } = require("express")

module.exports = function ({ PerformanceController }) {
  const router = Router()

  router.get("/:performanceId", PerformanceController.get)
  router.get("", PerformanceController.getAll)
  router.put("/:performanceId", PerformanceController.update)
  router.post("", PerformanceController.create)
  router.delete("/:performanceId", PerformanceController.delete)

  return router
};