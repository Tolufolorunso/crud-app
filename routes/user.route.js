const express = require('express')
const router = express.Router()

const {
  createUser,
  getUser,
  updateUser,
  deleteUser,
  getAllUser,
} = require('../controllers/user.controller')

router.route('/').post(createUser).get(getAllUser)
router.route('/:userID').get(getUser).patch(updateUser).delete(deleteUser)

module.exports = router
