var Sequelize = require('sequelize')


module.exports = function(sequelize) {

	var AddAgent = sequelize.define('agent', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
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
		password: {
			type: Sequelize.TEXT,
			reuire: true
		},
		emailAddress: {
			type: Sequelize.TEXT,
			reuire: true
		},
		department: {
			type: Sequelize.TEXT,
			reuire: true
		},
		group:{
			type: Sequelize.TEXT,
			reuire: true
		}

	}, {
		timestamps: true,
	})

	return AddAgent

}
