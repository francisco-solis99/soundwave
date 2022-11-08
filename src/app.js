const express = require('express')
const app = express()
const routes = require('./routes/index.routes')

// Midlewares
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.get('/', (req, res) => {
  res.send({ message: 'Welcome to SoundWave API' });
})

//app.use('/api', routes)


const PORT = 4000;
app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
})
