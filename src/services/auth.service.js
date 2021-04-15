const { generateToken } = require("../helpers/jwt.helper");
const { compareSync, hashSync, genSaltSync } = require("bcryptjs");

let _userService = null;

class AuthService {
  constructor({ UserService }) {
    _userService = UserService;
  }

  async signUp(user) {
    const { useremail } = user;
    const userExist = await _userService.getUserByEmail(useremail);
    if (userExist) {
      const error = new Error();
      error.status = 401;
      error.message = "User already exist";
      throw error;
    }

    return await _userService.create(user);
  }

  async signIn(user) {
    const { useremail, password } = user;
    const userExist = await _userService.getUserByEmail(useremail);
    if (!userExist) {
      const error = new Error();
      error.status = 404;
      error.message = "User does not exist";
      throw error;
    }

    const validPassword = comparePasswords(password, userExist.password);
    if (!validPassword) {
      const error = new Error();
      error.status = 400;
      error.message = "Invalid Password";
      throw error;
    }

    const userToEncode = {
      username: userExist.email,
      id: userExist.id,
    };

    const token = generateToken(userToEncode);

    return { token };
  }

  comparePasswords(password, passwordDb) {
    return compareSync(password, passwordDb);
  }
}

module.exports = AuthService
