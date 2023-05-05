// Core
const { prisma } = require('../prisma/prisma-client');

/**
    @route GET /api/employees
    @desc  Get all employees
    @access Privet
*/

const allEmployees = async (req, res ) => {
    try {
        const employees = await prisma.employee.findMany();
        res.status(200).json(employees);
    } catch {
        res.status(400).json({ message: 'Unable to get employees'})
    } 
}

/**
    @route GET /api/employee
    @desc  Get all employees
    @access Privet
*/

const getOneEmployee = async (req, res) => {
    try{
        console.log('Get one employee')
    } catch {
        res.status(500).json({ message: 'Something went wrong!'});
    }
}

/**
    @route POST /api/employees/add
    @desc  Add employee
    @access Privet
*/

const addEmployee = async (req, res) => {
    try {
        const data = req.body;

        if(!data.firstName || !data.lastName || !data.address || !data.age) {
            return res.status(400).json({ message: 'All fields must be filled out!'})
        }

        const employee = await prisma.employee.create({
            data : {
                ...data,
                userId: req.user.id
            }
        });
        
        

        return res.status(201).json(employee);
    } catch {
        res.status(500).json({ message: 'Something went wrong!'});
    }
}

/**
    @route GET /api/employee
    @desc  Get all employees
    @access Privet
*/

const removeEmployee = async (req, res) => {
    try{
        console.log('Get one employee')
    } catch {
        res.status(500).json({ message: 'Something went wrong!'});
    }
}

/**
    @route GET /api/employee
    @desc  Get all employees
    @access Privet
*/

const updateEmployee = async (req, res) => {
    try{
        console.log('Get one employee')
    } catch {
        res.status(500).json({ message: 'Something went wrong!'});
    }
}

module.exports = {
    allEmployees,
    getOneEmployee,
    addEmployee,
    removeEmployee,
    updateEmployee
}