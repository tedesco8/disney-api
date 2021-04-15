let _filmService = null;

class FilmController {
  constructor({ FilmService }) {
    //variable de tipo privada
    _filmService = FilmService;
  }

  async get(req, res) {
    const { filmId } = req.params;
    const film = await _filmService.get(filmId);
    return res.send(film);
  }

  async getAll(req, res) {
    const films = await _filmService.getAll();
    return res.send(films);
  }

  async create(req, res) {
    const { body } = req;
    const film = await _filmService.create(body);
    return res.send(film);
  }

  async update(req, res) {
    const { body } = req;
    const { filmId } = req.params;
    const updateFilm = await _filmService.update(filmId, body);
    return res.send(updateFilm);
  }

  async delete(req, res) {
    const { filmId } = req.params;
    const film = await _filmService.delete(filmId);
    return res.send(film);
  }

  async upvoteFilm(req, res) {
    const { filmId } = req.params;
    const film = await _filmService.upvoteFilm(filmId);
    return res.send(film);
  }

  async downvoteFilm(req, res) {
    const { filmId } = req.params;
    const film = await _filmService.downvoteFilm(filmId);
    return res.send(film);
  }
}

module.exports = FilmController;
