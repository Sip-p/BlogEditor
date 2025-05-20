const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello! Backend is working.');
});

app.listen(4000, () => {
  console.log('Test server running on port 4000');
});
