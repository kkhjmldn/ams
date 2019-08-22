const express = require('express')
const router = express.Router()

const Controller = require('../controllers/assignmentController')

router.get('/test', Controller.test)
router.post(`/assignment`,Controller.create)
router.get(`/assignments`,Controller.getAll)
router.get(`/assignment/:id`,Controller.getOne)
router.put(`/assignment/:id`,Controller.update)
router.delete(`/assignment/:id`,Controller.delete)

module.exports = router