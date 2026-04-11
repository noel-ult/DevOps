const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('DevOps Pipeline Running');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
