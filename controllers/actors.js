const express=require('express');
const {Actors} = require('../db');
function list(req,res,next) {
  Actors.findAll({})
          .then(objects => res.json(objects))
          .catch(err=> res.send(err));
}

function index(req,res,next) {
  const id=req.params.id;
  Actors.findByPk(id)
          .then(object => res.json(object))
          .catch(err => res.send(err));
}

function create(req,res,next) {
  const name=req.body.name;
  const lastName=req.body.lastName;
  let actor=new Object ({
    name:name,
    lastName:lastName
  });

Actors.create(actor)
        .then(obj => res.json(obj))
        .catch(err => res.send(err));
}

function replace(req,res,next) {
  const id=req.params.id;
  Actors.fineByPk(id)
          .then(()=>{
            const name = req.body.name ? req.body.name : "";
            const lastName = req.body.lastName ? req.body.lastName : "";
            object.update({name:name, lastName:lastName})
                  .then(actor => res.json(actor))
                  .catch(err => res.json(err));
          }).catch(err => res.json(err));

}

function edit(req,res,next) {
  const id=req.params.id;
  Actors.fineByPk(id)
          .then(()=>{
            const name = req.body.name ? req.body.name : object.name;
            const lastName = req.body.lastName ? req.body.lastName : object.lastName;
            object.update({name:name, lastName:lastName})
                  .then(actor => res.json(actor))
                  .catch(err => res.json(err));
          }).catch(err => res.json(err));
}

function destroy(req,res,next) {
  const id=req.params.id;
    Actors.destroy({where:{id:id} })
          .then(obj => res.json(obj))
          .catch(err => res.send(err));
}

module.exports={
  list,index,create,replace,edit,destroy
};
