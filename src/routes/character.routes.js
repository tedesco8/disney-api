const { Router } = require("express")

module.exports = function({ CharacterController }){
    const router = Router()

    router.get("/", CharacterController.index)

    return router
}