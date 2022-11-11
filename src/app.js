require('dotenv').config();

const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const routes = require('./routes/index.routes');

const app = express();

app.use(helmet())
app.use(cors())

// Midlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/', (req, res) => {
  res.send({ message: 'Welcome to SoundWave API' });
})

app.use('/api', routes);

const PORT = 4000;
app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
})
