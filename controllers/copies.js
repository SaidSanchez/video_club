const express = require('express');
const {Copies} = require('../db');

function list(req, res, next) {
    Copies.findAll({include:['bookings', 'movies']})
        .then(objects => res.json(objects));
}

function index(req, res, next) {
    const id= req.params.id;
    Copies.findByPk(id)
        .then(object => res.json(object));
}

function create(req, res, next) {
    const number = req.body.number;
    const status = req.body.status;
    const format = req.body.format;
    const moviesId = req.body.moviesId;
    let copies = new Object({
        number:number,
        status:status,
        format:format,
        moviesId:moviesId
    });
    Copies.create(copies)
        .then(obj => res.json(obj))
        .catch(err => res.send(err));
}

function replace(req, res, next) {
    const id = req.params.id;
    Copies.findByPk(id)
        .then(object => {
            const number = req.body.number ? req.body.number : "";
            const estatus = req.body.status ? req.body.status: "";
            const format = req.body.format ? req.body.format: "";
            const moviesId = req.body.moviesId ? req.body.moviesId: "";
            object.update({number:number, format:format, status:status, moviesId:moviesId})
                .then(copies => res.json(copies))
        })
}

function edit(req, res, next) {
    const id = req.params.id;
    Copies.findByPk(id)
        .then(object => {
            const number = req.body.number ? req.body.number:object.number
            const status = req.body.status ? req.body.status:object.status
            const format = req.body.format ? req.body.format:object.format
            const moviesId = req.body.moviesId ? req.body.moviesId:object.moviesId
            object.update({number:number, format:format, status:status, moviesId:moviesId})
                .then(copies => res.json(copies))
        })
}

function destroy(req, res, next) {
    const id = req.params.id;
    Copies.destroy({where:{id:id} })
        .then(obj => res.json(obj));
}

module.exports = {
    list,index,create,replace,edit,destroy
}
