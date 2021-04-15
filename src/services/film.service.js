const BaseService = require("./base.service");
let _filmRepository = null;
class FilmService extends BaseService {
  constructor({ FilmRepository }) {
    super(FilmRepository);
    _filmRepository = FilmRepository;
  }

  async getFilmByName(name) {
    return await _filmRepository.getFilmByName(name);
  }

  async upvoteFilm(filmId) {
    if (!filmId) {
      const error = new Error();
      error.status = 400;
      error.message = "filmId must be sent";
      throw error;
    }

    const film = await _filmRepository.get(filmId);

    if (!film) {
      const error = new Error();
      error.status = 404;
      error.message = "film does not exist";
      throw error;
    }

    film.reputation = film.reputation + 1;

    return await _filmRepository.update(filmId, { reputation: film.reputation });
  }

  async downvoteFilm(filmId) {
    if (!filmId) {
      const error = new Error();
      error.status = 400;
      error.message = "filmId must be sent";
      throw error;
    }

    const film = await _filmRepository.get(filmId);

    if (!film) {
      const error = new Error();
      error.status = 404;
      error.message = "film does not exist";
      throw error;
    }

    film.reputation = film.reputation - 1;

    return await _filmRepository.update(filmId, { reputation: film.reputation });
  }
}

module.exports = FilmService;
