const { Router } = require('express')
const portfolio = require('./portfolio')
require('./../config/mongodb')
const routes = Router()

routes.use(portfolio)

module.exports = routes