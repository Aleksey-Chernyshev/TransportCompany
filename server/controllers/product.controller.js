const db = require('../db')

class ProductController{
    async createProduct(req, res){
        const {name, weight, price, type_id,ed_izm_id} = req.body
        const newProduct = await db.query(
            `INSERT INTO product (name, weight, price, type_id, ed_izm_id) values ($1,$2, $3, $4, $5) RETURNING *`, [name, weight, price, type_id, ed_izm_id])
            res.json(newProduct.rows[0])
    }
    async getProductsId(req, res){
        const id = req.query.id
        let query = `SELECT * FROM product`
        if(id) {
            query += ` WHERE type_id = $1`
            const product = await db.query(``,[id])
            res.json(product.rows)
        } else{
            const product = await db.query(`SELECT product.*, type_product.category , ed_izm.ed_izm FROM product
            JOIN type_product ON product.type_id = type_product.type_id JOIN ed_izm ON product.ed_izm_id = ed_izm.id`)
            res.json(product.rows)
        }        
    } 

    async updateProduct(req, res){
        const{id,price} = req.body
        const product = await db.query(
            'UPDATE product set price = $1 where id = $2 RETURNING *', [price, id]
        )
        res.json(product.rows[0])
    }
    async deleteProduct(req, res){
        const id = req.params.id
        const product = await db.query(`DELETE FROM product where id = $1`, [id])
        res.json(product.rows[0])
    }
}
module.exports = new ProductController()