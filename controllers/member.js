const express=require('express');
const {Members} = require('../db');
function list(req,res,next) {
  Members.findAll({})
          .then(objects => res.json(objects))
          .catch(err=> res.send(err));
}

function index(req,res,next) {
  const id=req.params.id;
  Members.findByPk(id)
          .then(object => res.json(object))
          .catch(err => res.send(err));
}

function create(req,res,next) {
  const name=req.body.name;
  const lastName=req.body.lastName;
  const addres=req.body.addres;
  const phone=req.body.phone;
  const status=req.body.status;
  console.log("Hola desde consola");
  let member=new Object ({
    name:name,
    lastName:lastName,
    addres:addres,
    phone:phone,
    status:status
  });

Members.create(member)
        .then(obj => res.json(obj))
        .catch(err => res.send(err));
}

function replace(req,res,next) {
  const id=req.params.id;
  Members.fineByPk(id)
          .then(()=>{
            const name = req.body.name ? req.body.name : "";
            const lastName = req.body.lastName ? req.body.lastName : "";
            const addres=req.body.addres ? addres=req.body.addres : "";
            const phone=req.body.phone ? phone=req.body.phone : "";
            const status=req.body.status ? status=req.body.status : "";


            object.update({name:name, lastName:lastName , addres:addres, phone:phone, status:status})
                  .then(member => res.json(member))
                  .catch(err => res.json(err));
          }).catch(err => res.json(err));

}

function edit(req,res,next) {
  const id=req.params.id;
  Members.fineByPk(id)
          .then(()=>{
            const name = req.body.name ? req.body.name : object.name;
            const lastName = req.body.lastName ? req.body.lastName : object.lastName;
            const addres=req.body.addres ? addres=req.body.addres : object.addres;
            const phone=req.body.phone ? phone=req.body.phone : object.phone;
            const status=req.body.status ? status=req.body.status : object.status;


            object.update({name:name, lastName:lastName , addres:addres, phone:phone, status:status})
                  .then(member => res.json(member))
                  .catch(err => res.json(err));
          }).catch(err => res.json(err));
}

function destroy(req,res,next) {
  const id=req.params.id;
  Members.destroy({where:{id:id} })
          .then(obj => res.json(obj))
          .catch(err => res.send(err));
}

module.exports={
  list,index,create,replace,edit,destroy
};
