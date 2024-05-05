const express = require('express')
const router = express.Router()
const authcontrollers = require('../controllers/controller')



router.route('/').get(authcontrollers.home)
router.route('/register').post(authcontrollers.register)

module.exports = router;