require('babel-register');
require('dotenv').config();
const express = require('express');
const Router = require('express-promise-router');
const Routes = require('./routes/routes');
const routes = new Routes(new Router());
const server = express();
server.listen(process.env.port || 3000, () => console.log('Server is listening on port 3000!'));
server.use('/', routes.map());