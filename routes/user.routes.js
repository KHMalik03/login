const express = require('express');
const router = express.Router();

const authController = require('../controllers/auth.controller');
const { checkUserForm } = require('../middlewares/formChecker.middleware');

// Auth routes
router.post('/register', checkUserForm, authController.register);
router.post('/login', checkUserForm, authController.login);

// Health check route
router.get('/health', (req, res) => {
    res.status(200).json({ message: 'Server is running!' });
});

module.exports = router;