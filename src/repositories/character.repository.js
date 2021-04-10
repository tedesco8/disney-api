const BaseRepository = require("./base.repository")
let _character = null

class CharacterRepository extends BaseRepository{
    constructor({Character}) {
        super(Character)
        _character = Character
    }

    async getCharacterByName(name) {
        return await _character.finOne({
            where: {name:name}
        })
    }
}

module.exports = CharacterRepository