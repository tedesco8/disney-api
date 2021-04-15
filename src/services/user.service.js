const BaseService = require("./base.service")
const { compareSync, hashSync, genSaltSync } = require("bcryptjs")
let _userRepository = null

class UserService extends BaseService {
  constructor({ UserRepository }) {
    super(UserRepository)
    _userRepository = UserRepository
  }

  async getUserByEmail(email) {
    return await _userRepository.getUserByEmail(email)
  }

  async update(id, entity) {
    if (!id) {
      const error = new Error()
      error.status = 400
      error.message = "id must be sent"
      throw error
    }

    let password = await _userRepository.get(id);
    const validPassword = comparePasswords(password, entity.password)
    if (!validPassword) {
      const salt = genSaltSync(10)
      const hashedPassword = hashSync(user.password, salt)
      entity.password = hashedPassword

    }

    const currentEntity = await _userRepository.update(id, entity)

    if (!currentEntity) {
      const error = new Error()
      error.status = 404
      error.message = "entity does not found"
      throw error
    }

    return currentEntity
  }

  comparePasswords(password, passwordDb) {
    return compareSync(password, passwordDb)
  }
}

module.exports = UserService
