const conductorOptions = require('config').get('conductor')
const ConductorClient = require('./client').default

module.exports = new ConductorClient(conductorOptions)