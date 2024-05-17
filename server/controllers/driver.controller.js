const db = require('../db')

class DriverController{
    async createDriver(req, res){
        const {fio, birthday, work_phone, work_day, home_phone, pasport, adress, dr_license, photo} = req.body
        const newDriver = await db.query(`INSERT INTO driver (fio, birthday, work_phone, work_day, home_phone, pasport, adress, dr_license, photo) values ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`, [fio, birthday, work_phone, work_day, home_phone, pasport, adress, dr_license, photo])
        res.json(newDriver.rows[0])
    }
    async getDrivers(req, res){
        const drivers = await db.query(`SELECT * FROM driver`)
        res.json(drivers.rows)
    }
    async getOneDriver(req, res){
        const id = req.params.id
        const driver = await db.query(`SELECT * FROM driver where id = $1`, [id])
        res.json(driver.rows[0])
    }
    async updateDriver(req, res){
        const{id, adress, home_phone} = req.body
        const driver = await db.query(
            'UPDATE driver set adress = $1, home_phone = $2 where id = $3 RETURNING *', [adress, home_phone, id]
        )
        res.json(driver.rows[0])
    }
    async deleteDriver(req, res){
        const id = req.params.id
        const driver = await db.query(`DELETE FROM driver where id = $1`, [id])
        res.json(driver.rows[0])
    }
}
module.exports = new DriverController()