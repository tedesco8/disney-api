let _homeService = null

class HomeController {
    //HomeService es la dependencia que inyecta awilix declarada en el container
    constructor({HomeService}){
        //variable de tipo privada
        _homeService = HomeService 
    }

    index(req, res) {
        //retornamos el metodo index definido en la clase HomeService
        return res.send(_homeService.index())
    }
}

module.exports = HomeController