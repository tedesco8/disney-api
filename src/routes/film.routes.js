const { Router } = require("express")
const { AuthMiddleware, CacheMiddleware } = require("../middlewares")
const { CACHE_TIME } = require("../helpers")

module.exports = function ({ FilmController }) {
  const router = Router()

  router.get("/:filmId", AuthMiddleware, FilmController.get)
  router.get("", [AuthMiddleware, CacheMiddleware(CACHE_TIME.ONE_HOUR)], FilmController.getAll)
  router.put("/:filmId", AuthMiddleware, FilmController.update)
  router.post("", AuthMiddleware, FilmController.create)
  router.delete("/:filmId", AuthMiddleware, FilmController.delete)
  router.post("/:filmId/upvote", AuthMiddleware, FilmController.upvoteFilm);
  router.post("/:filmId/downvote", AuthMiddleware, FilmController.downvoteFilm);

  return router
};
