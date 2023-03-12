const express = require('express')
const app = express()
app.use(express.json())
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:true}))

app.get('/', (req, res)=>{
    res.render('index')
})

app.listen(3000, ()=>{
    console.log('El servidor se a iniciado en http://localhost:3000')
})