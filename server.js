const express = require('express');
const app = express();
const port = 3000;

//server listening
app.listen(port, () => {
  console.log(`Server start running on port http://localhost:${port}`);
});

//routes
app.get('/', (req, res) => {
  res.send("Hello World!");
});