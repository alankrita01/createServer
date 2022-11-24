const http = require('http');

const server = http.createServer((req,res) => {
  console.log('Alankrita');
  //res.write('alankrita');
  process.exit();
})

server.listen(4000);