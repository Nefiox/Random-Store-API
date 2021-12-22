const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    {
      name: 'Xbox Series X',
      price: 15000,
    },
    {
      name: 'Xbox Series S',
      price: 7000,
    },
  ]);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Xbox Series X',
    price: 15000,
  });
});

router.post('/', (req, res) => {
  const body = req.body;
  res.json({
    message: 'created',
    data: body
  })
});

module.exports = router;
