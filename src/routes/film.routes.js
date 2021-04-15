const { Router } = require("express")

module.exports = function ({ FilmController }) {
  const router = Router()

  router.get("/:filmId", FilmController.get)
  router.get("", FilmController.getAll)
  router.put("/:filmId", FilmController.update)
  router.post("", FilmController.create)
  router.delete("/:filmId", FilmController.delete)
  router.post("/:filmId/upvote", FilmController.upvoteFilm);
  router.post("/:filmId/downvote", FilmController.downvoteFilm);

  return router
};
