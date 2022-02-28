const express = require('express');
const googleLoginApi = require('./googleLogin');
const userApi = require('./users');

const router = express.Router();

router.use(googleLoginApi);
router.use('/users', userApi);

module.exports = router;
