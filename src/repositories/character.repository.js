const BaseRepository = require("./base.repository");
let _character = null;
let _film = null;

class CharacterRepository extends BaseRepository {
  constructor({ Character, Performances }) {
    super(Character);
    _character = Character;
    _performances = Performances;
  }

  async get(id) {
    return await _character.finOne({
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
