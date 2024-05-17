const Router = require('express')
const router = new Router()
const typeProductController = require('../controllers/type_product.controller')

router.post('/typeProduct', typeProductController.createTypeProduct)
router.get('/typeProduct', typeProductController.getTypeProducts)
router.get("/typeProduct/:id", typeProductController.getOneTypeProduct)
router.put('/typeProduct', typeProductController.updateTypeProduct)
router.delete('/typeProduct/:id', typeProductController.deleteTypeProduct)


module.exports = router