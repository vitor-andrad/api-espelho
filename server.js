const express = require('express');
const server = express();
const routes = express.Router();

routes.post('/', (req, res, next) => {console.log(req.body); return})


server.listen(5000);