const express = require('express');

const productsRouter = require('./api/products.route');
const usersRouter = require('./api/users.router');
const categoriesRouter = require('./api/categories.route');
const orderRouter = require('./api/orders.router');
const customerRouter = require('./api/customer.route');
const authRouter = require('./api/auth.route');
const profileRouter = require('./api/profile.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api', router);
  router.use('/products', productsRouter);
  router.use('/users', usersRouter);
  router.use('/categories', categoriesRouter);
  router.use('/orders', orderRouter);
  router.use('/customers', customerRouter);
  router.use('/auth', authRouter);
  router.use('/profile', profileRouter);
}

module.exports = routerApi;
