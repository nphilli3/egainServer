module.exports = function(){

	var express = require('express');
	var router = require('express').Router()
	var eAgent = require('../middlewares/eAgent')()

	router.use('/:id', eAgent.read)
	router.post('/', eAgent.create)
	router.get('/', eAgent.list)
	router.get('/:id', eAgent.read)
	router.put('/:id', eAgent.update)
	router.delete('/:id', eAgent.destroy)

	//Create
	router.post('/',function(req,res){
		res.json(req.payload.eAgent)
	})

	//List
	router.get('/', function(req, res) {
	  var payload = req.payload
	  res.json({
	  	data: req.payload.data,
	  	errors: req.payload.errors
	  })

	});
	//Read
	router.get('/:id', function(req, res) {
	  res.json(req.payload.eAgent)
	})

	//Update
	router.put('/:id', function(req, res){
	  res.json(req.payload.eAgent)
	})

	//Destroy
	router.delete('/:id',function(req,res){
	  res.json(req.payload.eAgent)
	})

	return router
}
