const express = require('express');
const routerApi = require('./routes');
const cors = require('cors');
const { checkApiKey } = require('./middlewares/auth.handler');

const {
  logErrors,
  errorHandler,
  boomErrorHandler,
  ormErrorHandler,
} = require('./middlewares/error.handler');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const whitelist = ['http://localhost:3000, http://localhost:8000'];

const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('No permitido'));
    }
  },
};

app.use(cors(options));
require('./utils/auth');

app.get('/', (req, res) => {
  res.send('Random products API');
});

app.get('/nuevaruta', checkApiKey, (req, res) => {
  res.send('Testing API key auth');
});

routerApi(app);

app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
