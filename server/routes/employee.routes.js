const Router = require('express')
const router = new Router()
const EmployeeController = require('../controllers/employee.controller')

router.post('/employee', EmployeeController.createEmployee)
router.get('/employee', EmployeeController.getEmployees)
router.get("/employee/:id", EmployeeController.getOneEmployee)
router.put('/employee', EmployeeController.updateEmployee)
router.delete('/employee/:id', EmployeeController.deleteEmployee)


module.exports = router