const express = require('express');
const router = express.Router();

const { findUserByEmail, addUser, authenticateUser } = require('../controllers/user.controller');
const {checkUserForm} = require('../middlewares/formChecker.middleware');

//routes

router.post('/register', checkUserForm, addUser);


//exporting the routes

module.exports = router;