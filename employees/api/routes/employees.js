// Core
const express = require('express');
const router = express.Router();
// Middleware
const { auth } = require('../middleware/auth');
// Controllers
const { 
    allEmployees,
    getOneEmployee,
    addEmployee,
    removeEmployee,
    updateEmployee
} = require('../controllers/employees');

// /api/employees
router.get('/', auth, allEmployees);
// /api/employees/:id
router.get('/:id', auth, getOneEmployee);
// /api/employees/add
router.post('/add', auth, addEmployee);
// /api/employees/remove/:id
router.delete('/remove/:id',removeEmployee);
// /api/employees/edit/:id
router.put('/edit/:id', auth, updateEmployee);

module.exports = router;