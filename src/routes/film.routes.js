const { Router } = require("express")

module.exports = function ({ FilmController }) {
  const router = Router()

  router.get("/:filmId", FilmController.get)
  router.get("", FilmController.getAll)
  router.put("/:filmId", FilmController.update)
  router.post("", FilmController.create)
  router.delete("/:filmId", FilmController.delete)

  return router
};
