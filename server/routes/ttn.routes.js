const Router = require('express')
const router = new Router()
const TTNController = require('../controllers/ttn.controller')

router.post('/ttn', TTNController.createTTN)
router.get('/ttn', TTNController.getTTNs )
// router.get('/ttn',  TTNController.getEndTTNs)
// router.put('/customer', CustomerController.updateCustomer)
router.delete('/ttn/:id', TTNController.deleteTTN)


module.exports = router