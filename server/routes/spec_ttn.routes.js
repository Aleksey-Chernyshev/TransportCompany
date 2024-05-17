const Router = require('express')
const router = new Router()
const SpecTTNController = require('../controllers/spec_ttn.controller')

router.post('/spec_ttn', SpecTTNController.createSpecTTN)
router.get('/spec_ttn', SpecTTNController.getSpecTTNs )
// router.get("/customer/:id",  CustomerController.getOneCustomer)
router.put('/spec_ttn', SpecTTNController.updateSpecTTN)
router.delete('/spec_ttn/:id', SpecTTNController.deleteSpecTTN)


module.exports = router