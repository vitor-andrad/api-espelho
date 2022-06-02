const express = require('express');
const server = express();

server.post('/', (req, res, next) => {console.log(req.body); res.status(200); return})


server.listen(5000);