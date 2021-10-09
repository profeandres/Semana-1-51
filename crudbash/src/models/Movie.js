'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    imgUrl:{
        type:String,
        required:true
    },
    nombre: {
        type: String,
        required: true
    },
    director:{
        type: String,
        required: true
    },
    estreno: {
        type: Number,
        required: true
    },
    aprobacion: {
        type: Number,
        required: true
    }
}, {timestamps: true});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;