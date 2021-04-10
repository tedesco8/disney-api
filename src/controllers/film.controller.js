let _filmService = null

class FilmController {
    constructor({FilmService}){
        //variable de tipo privada
        _filmService = FilmService 
    }

    index(req, res) {
        return res.send(_filmService.index())
    }
}

module.exports = FilmController