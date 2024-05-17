const Router = require('express')
const router = new Router()
const edIzmController = require('../controllers/edIzm.controller')


router.get('/edIzm', edIzmController.getEdIzm)



module.exports = router