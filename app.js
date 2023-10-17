const express = require('express');
const cors = require('cors');
const employeeRouter = require('./routes/employeeRoutes');
const userRouter = require('./routes/userRoutes');
const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/v1/employees', employeeRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
