require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./routes/index');
const app = express();
const primsa = require('./prismaClient');

app.use(cors());
app.use(express.json());
app.use('/api', routes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

module.exports = app;
