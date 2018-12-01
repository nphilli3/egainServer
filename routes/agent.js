module.exports = function(sequelize){

	var express = require('express');
	var router = require('express').Router()
	var agent = require('../middlewares/agent')(sequelize)

	router.use('/:id', agent.read)
	router.post('/', agent.create)
	router.get('/', agent.list)
	router.get('/:id', agent.read)
	router.put('/:id', agent.update)
	router.delete('/:id', agent.destroy)

	//Create
	router.post('/',function(req,res){
		res.json(req.payload.agent)
	})

	//List
	router.get('/', function(req, res) {
	  var payload = req.payload.agent
	  payload.limit = req.payload.query.limit
	  payload.offset = req.payload.query.offset
	  res.json(req.payload.agent)

	});
	//Read
	router.get('/:id', function(req, res) {
	  res.json(req.payload.agent)
	})

	//Update
	router.put('/:id', function(req, res){
	  res.json(req.payload.agent)
	})

	//Destroy
	router.delete('/:id',function(req,res){
	  res.json(req.payload.agent)
	})

	return router
}
