const BaseRepository = require("./base.repository");
let _film = null;
let _performance = null;

class FilmRepository extends BaseRepository {
  constructor({ Film, Performance }) {
    super(Film);
    _film = Film;
    _performance = Performance;
  }

  async get(id) {
    return await _film.finOne({
      where: { id: id },
      include: [
        {
          model: _performance,
          as: "performance",
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
