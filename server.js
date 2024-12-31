const http = require('http');
const app = require('./app');
const port = 5051;
const svr = http.createServer(app);
svr.listen(port,()=>{console.log("server on")});
console.log('server is up');