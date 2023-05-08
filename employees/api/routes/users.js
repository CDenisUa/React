// Core
const express = require('express');
const router = express.Router();
// Middleware
const { auth } = require('../middleware/auth');
// Controllers
const { 
    login, 
    register, 
    current 
} = require('../controllers/users');

/* api/user/login */
router.post('/login', login);

/* api/user/register */
router.post('/register',register);

/* api/user/current */
router.get('/current', auth, current);

module.exports = router;
