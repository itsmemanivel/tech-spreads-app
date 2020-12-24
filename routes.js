const express = require('express');
const { mongo } = require('mongoose');
const router = express.Router();
const path = require('path');
var rootPath = path.normalize(__dirname + '/../');
var { UserController } = require('./controllers');


module.exports = function(app){

    router.post('/users', UserController.add )
    router.get('/users', UserController.index);
    router.get('/user/:id', UserController.show);
    router.put('/user/:id', UserController.update);
    router.delete('/user/:id', UserController.remove);
    
    app.use('/api_v1', router);
//     app.use('/', (req, res) =>{
//         res.json({
//             app : 'DOOFIE',
//             backend : 'NodeJS',
//             frontend : 'Flutter',
//             database : 'mongoDB',
//             github : 'https://github.com/DOOFIE-app'
//         })
//     })
}
