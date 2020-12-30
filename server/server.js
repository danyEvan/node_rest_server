require('./config/config');
const express = require('express');
const app =  express();
const bodyParser = require('body-parser');

// bodyParser package
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());


//Routes
app.get('/', function (req, res){
    res.json('Hello world!')
});

app.get('/usuario', function (req, res){
    res.json('get usuario')
});
app.post('/usuario', function (req, res){
    let body = req.body;
    let status = (body.nombre === undefined ) 
               ? res.status(400).json({
                   ok:false,
                   msj:'El nombre es necesario'
               })
               : res.json({
                   persona : body
               });
    /*res.json({
        body
    })*/
});
app.put('/usuario/:id', function (req, res){
    let id = req.params.id;
    res.json({
        id
    })
});
app.delete('/usuario/:id', function (req, res){
    res.json('delete usuario')
});

app.listen(process.env.PORT, ()=> {
    console.log('Escuchando puerto: ', process.env.PORT)
});