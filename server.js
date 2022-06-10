const express = require('express');
const axios = require('axios');
const server = express();
server.use(express.urlencoded({ extended: true}));
const bodyParser = require('body-parser');
const path = require("path");

server.set('view engine','ejs');
server.set('views', path.join(__dirname, "views"));

server.post('/', (req, res, next) => {
        console.log(req.body);
        axios.post('https://script.google.com/macros/s/AKfycbyvAZ5DiY3r02g3AZYEb4_Fgtx0bi1VcEgpPNXFgmuhvJKHP1cPK4KVvOU4RL3F7KH_/exec', req.body)
        res.redirect(req.body.redirect); 
        return
    })

server.get('/', (req, res, next) => {res.render('index'); return})


server.listen(5000);