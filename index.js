const express = require('express');
const routerApi = require('./routes');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Okay');
});

routerApi(app);

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
