const express = require('express')

const router = express.Router()

const data = require('./data-controller.js')

router.put('/getHNum', data.getHnum)

module.exports = router