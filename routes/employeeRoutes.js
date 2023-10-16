const express = require('express');
const employeeController = require('../controllers/employeeController');

const employeeRouter = express.Router();

employeeRouter
  .route('/')
  .get(employeeController.getAllEmployees)
  .post(employeeController.createEmployee);

module.exports = employeeRouter;
