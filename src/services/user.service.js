const BaseService = require("./base.service")
let _userRepository = null

class UserService extends BaseService {
    constructor({UserRepository}) {
        super(UserRepository)
        _userRepository = UserRepository
    }

    async getUserByName(name) {
        return await _userRepository.getUserByName(name)
    }
}

module.exports = UserService