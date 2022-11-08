const express = require('express');
const app = express();
const routes = require('./routes/index.routes');
const sequelize = require('./config/db');

// Midlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/', (req, res) => {
  res.send({ message: 'Welcome to SoundWave API' });
})

app.use('/api', routes);

// Just to try the connection
try {
  sequelize.authenticate();
  sequelize.sync();
  console.log('Connected to DB');
} catch (error) {
  console.log('Unable to connect to DB: ', error);
}
const PORT = 4000;
app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
})
