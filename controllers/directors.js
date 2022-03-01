const express=require('express');

function list(req,res,next) {
  res.send("/directors=>list=Muestra una lista de directores");
}

function index(req,res,next) {
  const id=req.params.id;
  res.send(`directors=>index=Muestra el director con el id número ${id}`);
}

function create(req,res,next) {
  const name=req.body.name;
  const lastName=req.body.lastName;
  res.send(`/directors=>create= se crea un director con nombre ${name} y apellido ${lastName}`);
}

function replace(req,res,next) {

  res.send("/directors=>replace");
}

function edit(req,res,next) {

  res.send("/directors=>edit");
}

function destroy(req,res,next) {
  
  res.send("/directors=>destroy");
}

module.exports={
  list,index,create,replace,edit,destroy
};
