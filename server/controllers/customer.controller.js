const db = require('../db')

class CustomerController{
    async createCustomer(req, res){
        const {zakazchik, adress, phone, index, inn, rasch} = req.body
        const newCustomer = await db.query(`INSERT INTO customer (zakazchik, adress, phone, index, inn, rasch) 
        values ($1, $2, $3, $4, $5, $6) RETURNING *`, [zakazchik, adress, phone, index, inn, rasch])
        res.json(newCustomer.rows[0])
    }
    async getCustomers(req, res){
        const customers = await db.query(`SELECT * FROM customer`)
        res.json(customers.rows)
    }
    async getOneCustomer(req, res){
        const id = req.params.id
        const customer = await db.query(`SELECT * FROM customer where id = $1`, [id])
        res.json(customer.rows[0])
    }
    async updateCustomer(req, res){
        const{id, adress, phone} = req.body
        const customer = await db.query(
            'UPDATE customer set adress = $1, phone = $2 where id = $3 RETURNING *', [adress, phone, id]
        )
        res.json(customer.rows[0])
    }
    async deleteCustomer(req, res){
        const id = req.params.id
        const customer = await db.query(`DELETE FROM customer where id = $1`, [id])
        res.json(customer.rows[0])
    }
}
module.exports = new CustomerController()