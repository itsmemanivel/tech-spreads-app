var express = require('express');
var app = express();
const port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
var methodOverride = require('method-override');
var cookieParser = require('cookie-parser'); 
var dbURI = 'mongodb+srv://veluvijay:blogger1804@cluster0.9t5kr.mongodb.net/doofie?retryWrites=true';

mongoose.connect(dbURI,{useUnifiedTopology: true, useNewUrlParser: true}, function(err, res){
    if(err){
        console.log(err);
    } else {
        console.log(":::::::::::: Connected to MongoDB ::::::::::::");
    }
});


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use(methodOverride());
app.use(cookieParser());


require('./routes')(app);

// app.get('/',(req, res)=>{
//     res.json({"message":"Hello World!"});
// })


app.listen(port,'0.0.0.0',(req, res, next)=>{
    console.log('server running at ' + port);
})