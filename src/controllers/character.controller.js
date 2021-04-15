let _characterService = null

class CharacterController {
    constructor({CharacterService}){
        //variable de tipo privada
        _characterService = CharacterService 
    }

    async get(req, res) {
        const { characterId } = req.params
        const character = await _characterService.get(characterId)
        return res.send(character)
    }

    async getAll(req, res) {
        const characters = await _characterService.getAll()
        return res.send(characters)
    }

    async create(req, res) {
        const { body } = req
        // console.log(body)
        const character = await _characterService.create(body)
        return res.send(character)
    }

    async update(req, res) {
        const { body } = req
        const { characterId } = req.params
        const updateCharacter = await _characterService.update(characterId, body)
        return res.send(updateCharacter)
    }

    async delete(req, res) {
        const { body } = req
        const { characterId } = req.params
        const deleteCharacter = await _characterService.delete(characterId)
        return res.send(deleteCharacter)
    }
}

module.exports = CharacterController