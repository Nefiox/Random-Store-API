const express = require('express');

const productsRouter = require('./api/productsRoute');
const usersRouter = require('./api/usersRoute');
const categoriesRouter = require('./api/categoriesRoute');

function routerApi(app) {
  const router = express.Router();
  app.use('/api', router);
  router.use('/products', productsRouter);
  router.use('/users', usersRouter);
  router.use('/categories', categoriesRouter);
}

module.exports = routerApi;
