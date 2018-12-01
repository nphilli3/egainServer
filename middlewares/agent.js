var Agent = function(sequelize) {

	var handler = require('../library/handler')

	this.create = function(req, res, next) {
		sequelize.models.agent.create(req.body).then(function(agent) {
			req.payload.agent = agent
			next()
		}).catch(function(error){
			handler.badRequest(req,res,error.message)
		})
	}

	this.read = function(req, res, next) {
		sequelize.models.agent.findById(req.params.id,req.payload.query).then(function(agent) {
			if (!agent) return handler.notFound(req, res, 'Agent not found.')
			req.payload.agent = agent
			next()
		})
	}

	this.update = function(req, res, next) {
		var payload = req.payload.agent
		payload.update(req.body).then(function(updated){
			payload = updated
			next()
		}).catch(function(error){
			handler.badRequest(req,res,error.message)
		})
	}

	this.destroy = function(req, res, next) {
		req.payload.agent.destroy().then(function(deleted){
			req.payload.agent = {
				id: deleted.id,
				deleted: true
			}
			next()
		}).catch(function(error){
			handler.badRequest(req,res,error.message)
		})
	}

	this.list = function(req, res, next) {
		var query = req.payload.query
		sequelize.models.agent.findAndCountAll(query).then(function(agent) {
			req.payload.agent = agent
			next()
		})
	}
}

module.exports = function(sequelize) {
	return new Agent(sequelize)
}
