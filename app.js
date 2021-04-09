const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const compression = require('compression');
const {Sequelize} = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
});

try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
}
catch (error) {
  console.error('Unable to connect to the database:', error);
}

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

app.use(compression());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
