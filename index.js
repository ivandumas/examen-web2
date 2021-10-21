//Importando la biblioteca para realizar aplicaciones web
const express = require("express")
const path = require("path")
const cartaRoutes = require('./routes/cartas')
const sequelize = require('./utils/database')
//Creación de la aplicación web
const app = express();

//Middleware
app.use(express.static(path.join(__dirname,'public')))
//Configurar el servidor y que sepa que es un json
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/cartas",cartaRoutes);
//Atender una petición del recurso mipagina
app.get('/mipagina',(request,response)=>{
    response.sendFile(path.join(__dirname,'views','index.html'))
})

//Que la aplicación escuche peticiones
sequelize.sync()
    .then(()=>{
        app.listen(8080,()=>{
            console.log("Aplicación web en línea en el puerto 8080")
        })        
    })
    .catch(err=>console.log(err))


