const express = require('express');
const app = express();

// Midlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/', (req, res) => {
  res.send({ message: 'Welcome to SounWave API' });
})


const PORT = 4000;
app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
})
