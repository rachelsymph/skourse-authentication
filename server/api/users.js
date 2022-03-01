const express = require('express');
const passport = require('passport');
const { authUser, getUser, logout } = require('../controllers/users');
const { isUserAuthenticated } = require('../middlewares/auth');

const router = express.Router();

router.get('/:id', getUser);
router.get('/auth/user', isUserAuthenticated, authUser);
router.get('/logout', logout);

module.exports = router;
