const db = require('../db')

class EdIzmController{
    // async createProduct(req, res){
    //     const {name, weight, price, type_id,ed_izm_id} = req.body
    //     const newProduct = await db.query(
    //         `INSERT INTO product (name, weight, price, type_id, ed_izm_id) values ($1,$2, $3, $4, $5) RETURNING *`, [name, weight, price, type_id, ed_izm_id])
    //         res.json(newProduct.rows[0])
    // }
    async getEdIzm(req, res){
        const ed= await db.query(`SELECT * FROM ed_izm`)
        res.json(ed.rows)
    }

}
module.exports = new EdIzmController()