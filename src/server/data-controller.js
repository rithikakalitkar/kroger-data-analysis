const knex = require('./db')

exports.getHnum = async (req, res) => {
  knex('data')
    .where('HSHD_NUM', req.body.hnum)
    .orderBy('HSHD_NUM', 'asc')
    .orderBy('BASKET_NUM', 'asc')
    .orderBy('PURCHASE_', 'asc')
    .orderBy('PRODUCT_NUM', 'asc')
    .orderBy('DEPARTMENT', 'asc')
    .orderBy('COMMODITY', 'asc')
    .then((data) => {
      res.json(data)
    })
    .catch(err => {
      res.json({ status: 404, error: err.toString() })
    })
}