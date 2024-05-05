const express = require('express');
const router = express.Router();
const { createUser , loginUser} = require('../../controller/users/userController');


router.post('/sign-up',createUser)
router.post('/sign-in',loginUser)

module.exports = router