const express=require('express');
const controller=require('../controllers/booking');
const router =express.Router();

router.get('/',controller.list);

router.get('/:id',controller.index);

router.post('/',controller.create);

router.post('/add/actor',controller.addActor);

router.patch('/:id',controller.replace);

router.put('/:id',controller.edit);

router.delete('/:id',controller.destroy);

module.exports= router;
