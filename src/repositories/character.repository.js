const BaseRepository = require("./base.repository");
let _character = null;
let _performance = null;

class CharacterRepository extends BaseRepository {
  constructor({ Character, Performance }) {
    super(Character);
    _character = Character;
    _performance = Performance;
  }

  async get(id) {
    return await _character.finOne({
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
    return await _character.findAll({
      attributes: ["name", "image"],
    });
  }

  async getCharacterByName(name) {
    return await _character.finOne({
      where: { name: name },
    });
  }
}

module.exports = CharacterRepository;
