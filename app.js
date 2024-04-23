const express = require('express')
const app = express()

const db = require('./db')

const clienteController = require('./controllers/clienteController')

const clienteRouter = require('./routes/clientes')

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))

// app.get('/', (req, res) => {
//   res.send('Hola Mundo')
// })

// app.get('/', (req, res) => {
//   res.render('index')
// })

app.get('/', clienteController.mostrar)

app.listen(4000, () => {
  console.log('Server corriendo en http://localhost:4000')
})