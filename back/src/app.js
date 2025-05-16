require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const register = require('./routes/register');
const auth = require('./routes/authRoutes');



app.use(cors());
app.use(express.json());

app.use('/api', register);
app.use('/auth', auth);


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

module.exports = app;
