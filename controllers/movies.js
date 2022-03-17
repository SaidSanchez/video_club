const express=require('express');
const {Movie} = require('../db');
const {Actors} = require('../db');
function list(req,res,next) {
  Movie.findAll({include:['director']})
          .then(objects => res.json(objects))
          .catch(err=> res.send(err));
}

function index(req,res,next) {
  const id=req.params.id;
  Movie.findByPk(id)
          .then(object => res.json(object))
          .catch(err => res.send(err));
}


function create(req,res,next) {
  const title=req.body.title;
  const directorId =req.body.directorId;
  const generoId= req.body.generoID;
  let movie=new Object ({
    title:title,
    directorId:directorId,
    generoId:generoId
  });

Movie.create(movie)
        .then(obj => res.json(obj))
        .catch(err => res.send(err));
}

function addActor(req,res,next){
  const idMovie=req.body.idMovie;
  const idActor=req.body.idActor;

  Movie.findByPk(idMovie)
        .then((movie)=>{
          Actors.findByPk(idActor).then((actor)=>{
            movie.addActor(actor);
            res.json(movie);
          }).catch(err => res.send(err));
        }).catch(err => res.send(err));
}


function replace(req,res,next) {
  const id=req.params.id;
  Movie.fineByPk(id)
          .then(()=>{
            const title = req.body.title ? req.body.title : "";

            object.update({title:title})
                  .then(movie => res.json(movie))
                  .catch(err => res.json(err));
          }).catch(err => res.json(err));

}

function edit(req,res,next) {
  const id=req.params.id;
  /*Movie.fineByPk(id)
          .then(()=>{
            const name = req.body.name ? req.body.name : object.name;
            const lastName = req.body.lastName ? req.body.lastName : object.lastName;
            object.update({name:name, lastName:lastName})
                  .then(director => res.json(director))
                  .catch(err => res.json(err));
          }).catch(err => res.json(err));*/
}

function destroy(req,res,next) {
  const id=req.params.id;
  Movie.destroy({where:{id:id} })
          .then(obj => res.json(obj))
          .catch(err => res.send(err));
}

module.exports={
  list,index,create,replace,edit,destroy,addActor
};
