//config
require('dotenv').config()
const express = require('express')
const app = express()


//forma de ler JSON //middlewares
app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

//Rotas da API

const organizationRoutes = require('./routes/organizationRoutes')
const localeRoutes = require('./routes/localeRoutes')
const characterRoutes = require('./routes/characterRoutes')

app.use('/organization', organizationRoutes)
app.use('/locale', localeRoutes)
app.use('/character', characterRoutes)

//rota inicial / endpoint
app.get('/' , (req, res) => {

    //mostrar req

    res.json({message: 'Rota inicial!'})

})

app.listen(process.env.PORT, () => {
    console.log("Conectado ao servidor")
});