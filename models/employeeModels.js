const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
    enum: ['male', 'female', 'non-binary'],
  },
  yearsExp: {
    type: Number,
    required: true,
  },
  position: {
    type: String,
    required: true,
    enum: ['admin', 'doctor', 'nurse', 'cna', 'staff'],
  },
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
