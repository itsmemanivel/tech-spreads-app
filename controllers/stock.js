const { Stock } = require('../models');
var mongodb = require("mongodb");
var ObjectID = require('mongodb').ObjectID;

const stockController = {

    /*
     :::: ADD STOCKS ::::
    */
    add(req, res, next){ 
        const stocks = new Stock(req.body);
        users.save(function(err, data){
            if (err) {
                res.json({msg : 'Failed!'});
            } else {
                res.json({msg : 'Created Successfully!', data : data});
            }
        })
    },

    /*
     :::: GET ALL STOCKS ::::
    */
    async index(req, res){
        const stocks = await Stock.find((err, data)=>{
            if(err) {
                res.json({msg : 'Failed!'});
            } else {
                res.send(data);
            }
        });
    },

    /*
     :::: GET STOCKS BY ID::::
    */
    async show(req, res){
        var ID = req.params.id;
        const stocks = await Stock.findById({_id: new mongodb.ObjectID(ID.toString())}, (err, data)=>{
            if(err) {
                res.json({msg : 'Failed!'});
            } else {
                res.send(data);
            } 
        });
    },

    /*
     :::: UPDATE USERS ::::
    */
    async update(req, res, next){
        var ID = req.params.id;
        const users = await Stock.findByIdAndUpdate({_id: new mongodb.ObjectID(ID.toString())}, req.body, {new: true}, (err, data)=>{
            if(err) {
                res.json({msg : 'Failed!'});
            } else {
                res.json({msg : 'Updated Successfully!', data : data});
            }  
        });
    },

    /*
     :::: DELETE STOCKS ::::
    */
    async remove(req, res){
        var ID = req.params.id;
        const stocks = await Stock.deleteOne({_id: new mongodb.ObjectID(ID.toString())}, (err) =>{
            if(err) {
                res.json({msg : 'Failed!'});
            } else {
                res.json({msg : 'Deleted Successfully!'});
            }  
        });
    },
}


module.exports = stockController;