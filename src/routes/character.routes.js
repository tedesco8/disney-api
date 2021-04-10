const { Router } = require("express")

module.exports = function ({ CharacterController }) {
  const router = Router()

  router.get("/:characterId", CharacterController.get)
  router.get("", CharacterController.getAll)
  router.put("/:characterId", CharacterController.update)
  router.post("", CharacterController.create)

  return router
};