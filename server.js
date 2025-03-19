const express = require('express');
const app = express();
const port = 3000;

const songsRouter = require('./routers/songsRouter');

//SERVER LISTENING
app.listen(port, () => {
  console.log(`Server start running on port http://localhost:${port}`);
});

//MIDDLEWARES

//body parser
app.use(express.json());


//ROUTES

//home
app.get('/', (req, res) => {
  res.send("Hello World!");
});

//songs routes
app.use('/api/v1/songs', songsRouter);
