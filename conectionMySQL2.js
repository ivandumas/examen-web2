//Importar mysql2
const mysql=require('mysql2')

const configuracion = {
    host: '107.22.139.108',  //<----IP
    port: 3306,
    user:'user1', // mysql -u root
    password:'root'  //<-nombre de la base de datos\
}

const conexion = mysql.createConnection(configuracion);
//SHOW DATABASES
conexion.execute('SHOW DATABASES',(error, resultado,campos)=>{
    console.log('Conexion exitosa')
    console.log(error)
    console.log(resultado)
})