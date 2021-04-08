const express = require("express")

//variables privadas
let _express = null
let _config = null

class Server {
  constructor({ config, router }) {
    _config = config
    _express = express().use(router)
  }

  //retorna una promesa que va a se rla encargada de inicializar nuestro server
  start() {
    return new Promise(resolve => {
        //damos inicio al servidor
      _express.listen(_config.PORT, () => {
        console.log(
          _config.APPLICATION_NAME + " API running on port: " + _config.PORT
        )

        resolve()
      })
    })
  }
}

module.exports = Server;
