
const express = require('express')
const app = express()
const port = 3000
const path = require('path')
app.use('/static', express.static(path.join(__dirname,'public')));
app.set('view engine','ejs')
app.set('views',__dirname +'/views')

app.get('/', (req, res) => {
  /*res.send('Página principal!')*/
  console.log(__dirname)
  res.render('index')
})

app.get('/educacion', (req, res) => {
  res.render('educacion',{
    titulo:"Seccion educiacion",
    descripcion:"Aqui habrá información académica"
  })
  
})

app.get('/laboral', (req, res) => {
  res.send('Página de experiencia laboral!')
})

app.get('/infoper', (req, res) => {
  res.send('Página de mi informacion personal!')
})
app.use((req,res,next)=>{
  res.status(404).sendFile(__dirname +'/public/404.html')
})
app.listen(port, () => {
  console.log(`Acceda al servidor haciendo click aqui http://localhost:${port}`)
})