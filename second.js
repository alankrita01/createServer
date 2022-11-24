const http = require('http')

const server = http.createServer((req,res) => {
  res.write('Alankrita');
  res.end();
})

server.listen(4000);