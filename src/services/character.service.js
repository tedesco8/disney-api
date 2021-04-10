const BaseService = require("./base.service");
let _characterRepository = null;
class CharacterService extends BaseService {
  constructor({ CharacterRepository }) {
    super(CharacterRepository);
    _characterRepository = CharacterRepository;
  }

  async getUserByName(name) {
    return await _characterRepository.getUserByName(name);
  }
}

module.exports = CharacterService;
