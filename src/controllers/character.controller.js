let _characterService = null

class CharacterController {
    constructor({CharacterService}){
        //variable de tipo privada
        _characterService = CharacterService 
    }

    index(req, res) {
        return res.send(_characterService.index())
    }
}

module.exports = CharacterController