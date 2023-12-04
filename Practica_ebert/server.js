const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

//Requiriendo la conexión a BD gestor (MySQL)

const mysql = require('mysql2');

const conecction = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'Ebertform',
    port: '3306',
})

conecction.connect((err)=>{
    if(!err) {
        console.log('Conexion exitosa');
    }else{
        console.log('Conexion fallida');
    }
})

//Creando una nueva aplicación Express.
const app = express();
const path = require("path");


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use("/public", express.static(path.join(__dirname, "public")));
app.use('/public/css', express.static('public/css'));

app.get("/", function (req, res) {
    var filePath = path.join(__dirname, "./public/index.html");
    res.sendFile(filePath);
});
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
          console.log('El servidor esta en el puerto ' + PORT);
});


app.post("/valida", function (req, res) {
    const datos = req.body;
    let carrera = datos.carrera;
    let apellidos = datos.apellidos;
    let nombres = datos.nombres;
    let dni = datos.dni;
    let fechana = datos.fecha_nacimiento;
    let email = datos.correo_institucional;
    let contraseña = datos.contraseña;



    let registrar = "INSERT INTO formulario (car, apellido, nombres, dni, fechana,email,contraseña) VALUES ('" + carrera + "','" + apellidos + "','" + nombres + "','" + dni + "','" + fechana + "','" + email + "','" + contraseña + "')";

    conecction.query(registrar, function (error) {
        if (error) {
            throw error
        } else {
            console.log("Datos recibidos")
            console.log(Object.entries(datos));
            res.redirect(req.get('referer'));
        }
    }); 
});