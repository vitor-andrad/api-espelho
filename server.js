const express = require('express');
const server = express();

server.post('/', (req, res, next) => {console.log(req.body); res.status(200); return})
server.get('/', (req, res, next) => {res.send(req.query); return})


server.listen(5000);