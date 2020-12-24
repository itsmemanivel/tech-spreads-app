var express = require('express');
var app = express();
const port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
var methodOverride = require('method-override');
var cookieParser = require('cookie-parser'); 
var db = require('./config/db');
var dbURI = db.URI;
const swaggerUi = require("swagger-ui-express");
swaggerDocument = require("./swagger.json");

mongoose.connect(dbURI,{useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false})
.then(() => console.log(":::::::::::: Connected to MongoDB ::::::::::::"))
.catch(err =>{
    console.log(":::::::::::: ERROR ::::::::::::\n", err);
})


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use(methodOverride());
app.use(cookieParser());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
require('./routes')(app);


app.listen(port,'0.0.0.0',()=>{
    console.log('server running at ' + port);
})