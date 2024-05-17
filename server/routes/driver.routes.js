const Router = require('express')
const router = new Router()
const DriverController = require('../controllers/driver.controller')

router.post('/driver', DriverController.createDriver)
router.get('/driver', DriverController.getDrivers)
router.get("/driver/:id", DriverController.getOneDriver)
router.put('/driver', DriverController.updateDriver)
router.delete('/driver/:id', DriverController.deleteDriver)


module.exports = router