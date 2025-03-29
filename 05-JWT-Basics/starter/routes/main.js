const express = require('express')
const router = express.Router()

const { login, dashboard } = require('../controllers/main')

const authMiddleware = require('../middleware/auth')

router.route('/dashboard').get(authMiddleware, dashboard)//next() from the authMiddleware is the dashboard fn
// router.route('/dashboard').get(dashboard)
router.route('/login').post(login)

module.exports = router