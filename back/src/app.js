require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const user = require('./routes/userRoutes');
const auth = require('./routes/authRoutes');



app.use(cors());
app.use(express.json());

app.use('/api/users', user);
app.use('/api/auth', auth);


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

module.exports = app;
