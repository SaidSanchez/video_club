const express=require('express');
const {Genero} = require('../db');
function list(req,res,next) {
  Genero.findAll({})
          .then(objects => res.json(objects))
          .catch(err=> res.send(err));

}

function index(req,res,next) {
  const id=req.params.id;
  Genero.findByPk(id)
          .then(object => res.json(object))
          .catch(err => res.send(err));
}

function create(req,res,next) {
  const id=req.body.id;
  const description=req.body.description;
  const status=req.body.status;
  let genero=new Object ({
    id:id,
    description:description,
    status:status
  });

Genero.create(genero)
        .then(obj => res.json(obj))
        .catch(err => res.send(err));
}

function replace(req,res,next) {
  const id=req.params.id;
  Genero.fineByPk(id)
          .then(()=>{
            const description=req.body.description ? description=req.body.description : "";
            const status=req.body.status? status=req.body.status : "";
            object.update({description:description, status:status})
                  .then(genero => res.json(genero))
                  .catch(err => res.json(err));
          }).catch(err => res.json(err));

}

function edit(req,res,next) {
  const id=req.params.id;
  Genero.fineByPk(id)
          .then(()=>{
            const description=req.body.description ? description=req.body.description : object.description;
            const status=req.body.status? status=req.body.status : object.status;
            object.update({description:description, status:status})
                  .then(genero => res.json(genero))
                  .catch(err => res.json(err));
          }).catch(err => res.json(err));
}

function destroy(req,res,next) {
  const id=req.params.id;
  Genero.destroy({where:{id:id} })
          .then(obj => res.json(obj))
          .catch(err => res.send(err));
  }

module.exports={
  list,index,create,replace,edit,destroy
};
