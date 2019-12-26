const express = require('express');
const app = express();

const { config } = require('./config/index');

app.get('/', function(req, res){
    res.send('hello word');
});

app.get('/', function(req, res){
    res.json({hello: 'word'});
});

app.listen(config.port, ()=>{
    console.log(`Listening http://localhost:${config.port}`)
});