const { Router } = require("express")
const { AuthMiddleware } = require("../middlewares")

module.exports = function ({ FilmController }) {
  const router = Router()

  router.get("/:filmId", AuthMiddleware, FilmController.get)
  router.get("", [AuthMiddleware], FilmController.getAll)
  router.put("/:filmId", AuthMiddleware, FilmController.update)
  router.post("", AuthMiddleware, FilmController.create)
  router.delete("/:filmId", AuthMiddleware, FilmController.delete)
  router.post("/:filmId/upvote", AuthMiddleware, FilmController.upvoteFilm);
  router.post("/:filmId/downvote", AuthMiddleware, FilmController.downvoteFilm);

  return router
};
