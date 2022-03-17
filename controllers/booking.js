const express = require('express');
const { Booking } = require('../db');

function list(req, res, next) {
    Booking.findAll({include:['members', 'copies']})
        .then(objects => res.json(objects));
}

function index(req, res, next) {
    const id= req.params.id;
    Booking.findByPk(id)
        .then(object => res.json(object));
}

function create(req, res, next) {
    const date = req.body.name;
    const copiesId = req.body.copiesId;
    const membersId = req.body.membersId;

    let booking = new Object({
        date:date,
        copiesId:copiesId,
        membersId:membersId,
    });
    Booking.create(booking)
        .then(obj => res.json(obj))
        .catch(err => res.send(err));
}

function replace(req, res, next) {
    const id = req.params.id;
    Booking.findByPk(id)
        .then(object => {
            const date = req.body.date ? req.body.date: "";
            const copiesId = req.body.copiesId ? req.body.copiesId: "";
            const membersId = req.body.membersId ? req.body.membersId: "";
            object.update({date:date, membersId:membersId, copiesId:copiesId})
                .then(booking => res.json(booking))
        })
}

function edit(req, res, next) {
    const id = req.params.id;
    Booking.findByPk(id)
        .then(object => {
            const date = req.body.date ? req.body.date:object.date
            const copiesId = req.body.copiesId ? req.body.copiesId:object.copiesId
            const membersId = req.body.membersId ? req.body.membersId:object.membersId
            object.update({date:date, membersId:membersId, copiesId:copiesId})
                .then(booking => res.json(booking))
        })
}

function destroy(req, res, next) {
    const id = req.params.id;
    Booking.destroy({where:{id:id} })
        .then(obj => res.json(obj));
}

module.exports = {
    list,index,create,replace,edit,destroy
}
