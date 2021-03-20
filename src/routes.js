const router = require('express').Router()

const skusController = require('./skusController')

router.post('/skus', skusController.update)

module.exports = router
