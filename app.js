const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hola Mundo')
})

app.listen(4000, () => {
  console.log('Server corriendo en http://localhost:4000')
})