const db = require('../db')

class TTNController{
    async createTTN(req, res){
        const {zakazchik, driver, employee, registr_day} = req.body
        const newTTN = await db.query(
            `INSERT INTO ttn (zakazchik, driver, employee, registr_day) values ($1,$2, $3, $4) RETURNING *`, [zakazchik, driver, employee, registr_day])
            res.json(newTTN.rows[0])
    }
    async getTTNs(req, res){
        const ttn = await db.query(`SELECT ttn.*, driver.fio, customer.zakazchik,employee.fio FROM ttn
        JOIN driver ON ttn.driver = driver.id JOIN customer ON ttn.zakazchik = customer.id JOIN employee ON ttn.employee = employee.id`)
        res.json(ttn.rows)
    }
    as
    // async getEndTTNs(req,res){
    //     const ttn = await db.query(`SELECT * FROM ttn ORDER BY id DESC LIMIT 1;`)
    //     res.json(ttn.rows[0])
    // }
    // async updateTTN(req, res){
    //     const{id,price} = req.body
    //     const product = await db.query(
    //         'UPDATE product set price = $1 where id = $2 RETURNING *', [price, id]
    //     )
    //     res.json(product.rows[0])
    // }
    async deleteTTN(req, res){
        const id = req.params.id
        const ttn = await db.query(`DELETE FROM ttn where id = $1`, [id])
        res.json(ttn.rows[0])
    }
}
module.exports = new TTNController()