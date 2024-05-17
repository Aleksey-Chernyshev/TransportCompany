const db = require('../db')

class Spec_TTNController{
    async createSpecTTN(req, res){
        const {ttn_id, product_id, count, total_price, sale} = req.body
        const newTTN = await db.query(
            `INSERT INTO spec_ttn (ttn_id, product_id, count, total_price, sale) values ($1, $2, $3, $4, $5) RETURNING *`, [ttn_id, product_id, count, total_price, sale])
            res.json(newTTN.rows[0])
    }
    async getSpecTTNs(req, res){
        const ttn = await db.query(`SELECT * FROM spec_ttn`)
        res.json(ttn.rows)
    }
    async updateSpecTTN(req, res){
        const{id, count, total_price,sale } = req.body
        try {
            // Проверяем, существует ли запись
            const exists = await db.query('SELECT id FROM spec_ttn WHERE id = $1', [id]);
            if (exists.rows.length === 0) {
              return res.status(404).send('Запись с таким id не найдена');
            }
        
            // Обновляем запись
            const specTTN = await db.query(
              'UPDATE spec_ttn SET count = $1, total_price = $2, sale = $3 WHERE id = $4 RETURNING *',
              [count, total_price, sale, id]
            );
            res.json(specTTN.rows[0]);
          } catch (error) {
            console.error('Ошибка при обновлении:', error);
            res.status(500).send('Внутренняя ошибка сервера');
          }
    }
    async deleteSpecTTN(req, res){
        const id = req.params.id
        const specTTN = await db.query(`DELETE FROM spec_ttn where id = $1`, [id])
        res.json(specTTN.rows[0])
    }
}
module.exports = new Spec_TTNController()