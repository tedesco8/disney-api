const BaseRepository = require("./base.repository")
let _user = null

class UserRepository extends BaseRepository{
    constructor({User}) {
        super(User)
        _user = User
    }

    async getUserByName(name) {
        return await _user.finOne({
            where: {name:name}
        })
    }
}

module.exports = UserRepository