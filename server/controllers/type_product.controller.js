const db = require('../db')

class TypeProductController{
    async createTypeProduct(req, res){
        const {category, description, image} = req.body
        const newType = await db.query(`INSERT INTO type_product (category, description, image) values ($1, $2, $3) RETURNING *`, [category, description, image])
        res.json(newType.rows[0])
    }
    async getTypeProducts(req, res){
        const types = await db.query(`SELECT * FROM type_product`)
        res.json(types.rows)
    }
    async getOneTypeProduct(req, res){
        const id = req.params.id
        const type = await db.query(`SELECT * FROM type_product where type_id = $1`, [id])
        res.json(type.rows[0])
    }
    async updateTypeProduct(req, res){
        const{type_id,description} = req.body
        const type = await db.query(
            'UPDATE type_product set description = $1 where type_id = $2 RETURNING *', [description,type_id]
        )
        res.json(type.rows[0])
    }
    async deleteTypeProduct(req, res){
        const id = req.params.id
        const type = await db.query(`DELETE FROM type_product where type_id = $1`, [id])
        res.json(type.rows[0])
    }
}
module.exports = new TypeProductController()