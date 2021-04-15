const BaseService = require("./base.service")
let _userRepository = null

class UserService extends BaseService {
    constructor({UserRepository}) {
        super(UserRepository)
        _userRepository = UserRepository
    }

    async getUserByEmail(email) {
        return await _userRepository.getUserByEmail(email)
    }
}

module.exports = UserService