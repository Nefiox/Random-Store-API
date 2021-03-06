const express = require('express');
const passport = require('passport');

const OrderService = require('../../services/order.service');
const validatorHandler = require('../../middlewares/validator.handler');
const {
  createOrderSchema,
  getOrderSchema,
  addItemSchema,
} = require('../../schemas/order.schema');

const router = express.Router();
const service = new OrderService();

router.get('/', async (req, res) => {
  const orders = await service.find();
  res.status(200).json(orders);
});

router.get(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  validatorHandler(getOrderSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const order = await service.findOne(id);
      if (order) {
        res.status(200).json(order);
      } else {
        res.status(404).json({ message: 'Order not found' });
      }
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/',
  validatorHandler(createOrderSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newOrder = await service.create(body);
      res.status(201).json(newOrder);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/add-item',
  validatorHandler(addItemSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newItem = await service.addItem(body);
      res.status(201).json(newItem);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
