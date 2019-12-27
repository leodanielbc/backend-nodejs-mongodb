const express = require('express');
const app = express();

const { config } = require('./config/index');
//Ejercicio 1:
/*
app.get('/', function(req, res){
    res.send('hello word');
});
*/

//Ejercicio 2: Año es biciesto
app.get("/:year",(req, res)=>{
    const year = req.params.year;

    if (year % 4 == 0 && year % 100 !== 0 && year % 400 !==0){
        res.send(`El año ${year} es biciesto`);
    } else {
        res.send(`El año ${year} NO es biciesto`);
    }
});

//--------------FIN------------


app.get('/', function(req, res){
    res.json({hello: 'word'});
});

app.listen(config.port, ()=>{
    console.log(`Listening http://localhost:${config.port}`)
});