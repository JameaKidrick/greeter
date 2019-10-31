const express = require('express');

const server = express(); // creating an instance of an express server

server.get('/', (req, res) => {
  res.status(200).json({ hello: 'Web 23' });
});

// the PORT is coming from the environment
const port = process.env.PORT || 4000
// the PORT will be set by Heroku when we deploy
console.log('port', port)
server.listen(port, () => {
  console.log(`\n Server running on port ${port} \n`);
});
