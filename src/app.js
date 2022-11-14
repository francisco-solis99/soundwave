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

app.listen(process.env.PORT || 4000, () => {
  console.log('Listening on port ' + process.env.PORT);
})
