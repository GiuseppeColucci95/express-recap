const express = require('express');
const router = express.Router();

//index
router.get('/', (req, res) => {
  res.send("Return all songs");
});

//show
router.get('/:id', (req, res) => {
  const id = req.params.id;
  console.log(req.params);

  res.send(`Return song with id: ${id}`);
});

//store
router.post('/', (req, res) => {
  console.log(req.body);

  res.send("Create a new song");
});

//update
router.put('/:id', (req, res) => {
  const id = req.params.id;
  console.log(req.params);

  res.send(`Update song with id: ${id}`);
});

//modify
router.patch('/:id', (req, res) => {
  const id = req.params.id;
  console.log(req.params);

  res.send(`Modify song with id: ${id}`);
});

//destroy
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  console.log(req.params);

  res.send(`Delete song with id: ${id}`);
});

module.exports = router;