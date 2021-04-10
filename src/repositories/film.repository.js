const BaseRepository = require("./base.repository");
let _film = null;
let _performances = null;

class FilmRepository extends BaseRepository {
  constructor({ Film, Performances }) {
    super(Film);
    _film = Film;
    _performances = Performances;
  }

  async get(id) {
    return await _film.finOne({
      where: { id: id },
      include: [
        {
          model: _performances,
          as: "performances",
        },
      ],
    });
  }

  async getAll() {
    return await _film.findAll({
      attributes: ["title", "image", "created_at"],
    });
  }

  async getFilmByName(name) {
    return await _film.finOne({
      where: { name: name },
    });
  }
}

module.exports = FilmRepository;
