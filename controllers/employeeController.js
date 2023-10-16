const Employee = require('../models/employeeModels');
const catchAsync = require('../utils/catchAsync');
const APIFeatures = require('../utils/apiFeatures');

exports.createEmployee = catchAsync(async (req, res, next) => {
  const newEmployee = await Employee.create(req.body);

  res.status(201).json({
    status: 'success',
    data: { employee: newEmployee },
  });
});

exports.getAllEmployees = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(Employee.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();
  const employees = await features.query;

  res.status(200).json({
    status: 'success',
    results: employees.length,
    data: { employees },
  });
});
