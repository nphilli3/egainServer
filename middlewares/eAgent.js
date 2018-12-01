var EAgent = function() {
	var convert = require ('xml-js')
	var handler = require('../library/handler')
	var request = require("request");

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
		var pagecount = 1
		var session = req.body['x-egain-session']
		req.payload.errors = []
		req.payload.data = []


		debugger
		function getNextPage(){

		    var options = {
		    	method: 'GET',
		    	url: 'https://zulily.egain.cloud/system/ws/v12/administration/user',
		    	qs: { department: 'service', '$pagesize': '75', '$pagenum': pagecount.toString()  },
		    	headers: 
		       { 
		       	'cache-control': 'no-cache',
		        'X-egain-session': session,
		       } 
		     };

		    request(options, function (error, response, body) {
		      if (error || response.statusCode != 200) {
		        
		        next()
		      }else{
		        ++pagecount
		        var data = convert.xml2json(body, {
		        	ignoreComment: true,
		        	trim: true, 
		        	compact: true, 
		        	spaces: 4
		        })
		        req.payload.data.push(JSON.parse(data))
		        getNextPage()
		      }


		      //console.log(body);
		      console.log(response.statusCode);
		    });
		}
		getNextPage()
	}
}

module.exports = function() {
	return new EAgent()
}
