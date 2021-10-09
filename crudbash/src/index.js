'use strict'

const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

//express app
const app = express();
app.set("PORT", process.env.PORT || 3000);

//Connect to mongodb
const dbURI = 'mongodb+srv://grupo3MisionTIC:grupo3misiontic@cluster0.rk43i.mongodb.net/Bash?retryWrites=true&w=majority'
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('Conexión exitosa')
        app.listen(app.get("PORT"),()=>{
            console.log(`Server started on port: ${app.get("PORT")}`);
        });
    })
    .catch(err=> console.log(err));

//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//routes
app.use(require('./routes/movie'));

//Static files
app.use(express.static(__dirname + '\\public'));
