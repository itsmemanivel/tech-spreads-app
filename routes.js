const express = require('express');
const router = express.Router();
const path = require('path');
var rootPath = path.normalize(__dirname + '/../');
var { UserController } = require('./controllers');



module.exports = function(app){

    router.get('/getall', UserController.index);
    router.get('/get/:id', UserController.show);

    app.use('/api/users', router);
}
