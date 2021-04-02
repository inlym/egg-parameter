'use strict'

const Parameter = require('parameter')
const only = require('only')

module.exports = (app) => {
	const options = only(app.config.validate, 'translate validateRoot convert widelyUndefined')
	app.validator = new Parameter(options)
}
