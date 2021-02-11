const express = require('express');
const { mongo } = require('mongoose');
const router = express.Router();
const path = require('path');
var rootPath = path.normalize(__dirname + '/../');
var { UserController } = require('./controllers');
var { StockController } = require('./controllers');

module.exports = function(app){

    router.post('/users', UserController.add )
    router.get('/users', UserController.index);
    router.get('/user/:id', UserController.show);
    router.put('/user/:id', UserController.update);
    router.delete('/user/:id', UserController.remove);


    router.post('/stocks', StockController.add )
    router.get('/stocks', StockController.index);
    router.get('/stock/:id', StockController.show);
    router.put('/stock/:id', StockController.update);
    router.delete('/stock/:id', StockController.remove);
    
    app.use('/api_v1', router);
    app.use('/', (req, res) =>{
        res.json({
            app : 'Tech Spreads',
            backend : 'NodeJS',
            frontend : 'Angular',
            database : 'mongoDB',
            github : 'https://github.com/tech-spreads-app'
        })
    })
}
