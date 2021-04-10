let _userService = null

class UserController {
    //UserService es la dependencia que inyecta awilix declarada en el container
    constructor({UserService}){
        //variable de tipo privada
        _userService = UserService 
    }

    async get(req, res) {
        const { userId } = req.params
        const user = await _userService.get(userId)
        return res.send(user)
    }

    async getAll(req, res) {
        const users = await _userService.getAll()
        return res.send(users)
    }

    async create(req, res) {
        const { body } = req
        const user = await _userService.create(body)
        return res.send(user)
    }

    async update(req, res) {
        const { body } = req
        const { userId } = req.params
        const updateUser = await _userService.update(userId, body)
        return res.send(updateUser)
    }

    async delete(req, res) {
        const { userId } = req.params
        const user = await _userService.delete(userId)
        return res.send(user)
    }
}

module.exports = UserController