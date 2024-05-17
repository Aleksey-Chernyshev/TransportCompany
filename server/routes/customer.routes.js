const Router = require('express')
const router = new Router()
const CustomerController = require('../controllers/customer.controller')

router.post('/customer', CustomerController.createCustomer)
router.get('/customer',  CustomerController.getCustomers)
router.get("/customer/:id",  CustomerController.getOneCustomer)
router.put('/customer', CustomerController.updateCustomer)
router.delete('/customer/:id', CustomerController.deleteCustomer)


module.exports = router