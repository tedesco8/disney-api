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
}

module.exports = FilmService;
