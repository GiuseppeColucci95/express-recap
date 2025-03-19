const express = require('express');
const app = express();
const port = 3000;

//server listening
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

//index
app.get('/api/v1/songs', (req, res) => {
  res.send("Return all songs");
});

//show
app.get('/api/v1/songs/:id', (req, res) => {
  const id = req.params.id;
  console.log(req.params);

  res.send(`Return song with id: ${id}`);
});

//store
app.post('/api/v1/songs', (req, res) => {
  console.log(req.body);

  res.send("Create a new song");
});

//update
app.put('/api/v1/songs/:id', (req, res) => {
  const id = req.params.id;
  console.log(req.params);

  res.send(`Update song with id: ${id}`);
});

//modify
app.patch('/api/v1/songs/:id', (req, res) => {
  const id = req.params.id;
  console.log(req.params);

  res.send(`Modify song with id: ${id}`);
});

//destroy
app.delete('/api/v1/songs/:id', (req, res) => {
  const id = req.params.id;
  console.log(req.params);

  res.send(`Delete song with id: ${id}`);
});