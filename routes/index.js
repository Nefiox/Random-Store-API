const express = require('express');

const productsRouter = require('./api/products.route');
const usersRouter = require('./api/users.route');
const categoriesRouter = require('./api/categories.route');

function routerApi(app) {
  const router = express.Router();
  app.use('/api', router);
  router.use('/products', productsRouter);
  router.use('/users', usersRouter);
  router.use('/categories', categoriesRouter);
}

module.exports = routerApi;
