const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req,res) =>{
    res.sendFile((__dirname + '/views/index.html'));  // Permite enviar un archivo HTML
});

app.get('/login', (req,res) =>{
    res.sendFile((__dirname + '/views/login.html'));  
});

app.get('/registro', (req,res) =>{
    res.sendFile((__dirname + '/views/registro.html')); 
});

app.use(express.static(path.join(__dirname, './public')));  

app.listen(process.env.PORT || 3000,function () {
    console.log("Servidor corriendo en el puerto 3000");
});     



