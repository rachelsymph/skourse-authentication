const express = require('express');
const passport = require('passport');
const { authUser, getUser } = require('../controllers/users');
const { isUserAuthenticated } = require('../middlewares/auth');

const router = express.Router();

router.get('/:id', getUser);
router.get('/auth/user', isUserAuthenticated, authUser);

module.exports = router;
