const express = require('express');
const server = express();
server.use(express.urlencoded({ extended: true}));
const bodyParser = require('body-parser');

server.post('/', (req, res, next) => {console.log(req.body); res.redirect('/'); return})
server.get('/', (req, res, next) => {res.render('index'); return})


server.listen(5000);