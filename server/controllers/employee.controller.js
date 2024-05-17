const db = require('../db')

class EmployeeController{
    async createEmployee(req, res){
        const {fio, home_phone, work_day, birthday, pasport, work_phone, photo, adress } = req.body
        const newEmployee = await db.query(`INSERT INTO employee (fio, home_phone, work_day, birthday, pasport, work_phone, photo, adress) values ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`, [fio, home_phone, work_day, birthday, pasport,work_phone, photo, adress])
        res.json(newEmployee.rows[0])
    }
    async getEmployees(req, res){
        const employees = await db.query(`SELECT * FROM employee`)
        res.json(employees.rows)
    }
    async getOneEmployee(req, res){
        const id = req.params.id
        const employee = await db.query(`SELECT * FROM employee where id = $1`, [id])
        res.json(employee.rows[0])
    }
    async updateEmployee(req, res){
        const{id, adress, home_phone} = req.body
        const employee = await db.query(
            'UPDATE employee set adress = $1, home_phone = $2 where id = $3 RETURNING *', [adress, home_phone, id]
        )
        res.json(employee.rows[0])
    }
    async deleteEmployee(req, res){
        const id = req.params.id
        const employee = await db.query(`DELETE FROM employee where id = $1`, [id])
        res.json(employee.rows[0])
    }
}
module.exports = new EmployeeController()