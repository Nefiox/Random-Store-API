const express = require('express');
const routerApi = require('./routes');
const cors = require('cors');

const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require('./middlewares/error.handler');

const app = express();
const PORT = 3000;

app.use(express.json());

const whitelist = ['http://localhost:3000, http://localhost:8000', 'https://myapp.com'];

const options = {origin: (origin, callback) => {
  if(whitelist.includes(origin)) {
    callback(null, true);
  } else {
    callback(new Error('No permitido'))
  }
}
}

app.use(cors(options));

app.get('/', (req, res) => {
  res.send('Okay');
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
