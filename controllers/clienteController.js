const Cliente = require('../model/Cliente')

//Mostrar
module.exports.mostrar = (req, res) => {
  Cliente.find({}, (error, clientes) => {
    if(error) {
      return res.status(500).json({
        message: 'Error mostrando los clientes'
      })
    }
    return res.render('index', {clientes: clientes})
  })
}