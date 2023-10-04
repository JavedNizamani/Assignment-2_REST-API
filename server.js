const http = require('http');
const app = require('./app');
const PORT = process.env.PORT || 3000;
const server = http.createServer(app);              // Run entire api 

server.listen(PORT,()=>{
    console.log(`Server Running on PORT : ${PORT}`);
})
