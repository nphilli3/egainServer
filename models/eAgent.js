var Sequelize = require('sequelize')


module.exports = function(sequelize) {

	var EgainAgent = sequelize.define('agent', {
		id: {
			type: Sequelize.TEXT,
			reuire: true
		},
		firstName: {
			type: Sequelize.TEXT,
			reuire: true
		},
		lastName: {
			type: Sequelize.TEXT,
			reuire: true
		},
		screenName: {
			type: Sequelize.TEXT,
			reuire: true
		},
		loginId: {
			type: Sequelize.TEXT,
			reuire: true
		},
	}, {
		timestamps: false,
	})

	return EgainAgent

}