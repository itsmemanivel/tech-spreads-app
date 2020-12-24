const { User } = require('../models');
var mongodb = require("mongodb");
var ObjectID = require('mongodb').ObjectID;

const userController = {

    /*
     :::: ADD USERS ::::
    */
    add(req, res, next){ 
        const users = new User(req.body);
        users.save(function(err, data){
            if (err) {
                res.json({msg : 'Failed!'});
            } else {
                res.json({msg : 'Created Successfully!', data : data});
            }
        })
    },

    /*
     :::: GET ALL USERS ::::
    */
    async index(req, res){
        const users = await User.find((err, data)=>{
            if(err) {
                res.json({msg : 'Failed!'});
            } else {
                res.send(data);
            }
        });
    },

    /*
     :::: GET USERS BY ID::::
    */
    async show(req, res){
        var ID = req.params.id;
        const users = await User.findById({_id: new mongodb.ObjectID(ID.toString())}, (err, data)=>{
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
        const users = await User.findByIdAndUpdate({_id: new mongodb.ObjectID(ID.toString())}, req.body, {new: true}, (err, data)=>{
            if(err) {
                res.json({msg : 'Failed!'});
            } else {
                res.json({msg : 'Updated Successfully!', data : data});
            }  
        });
    },

    /*
     :::: DELETE USERS ::::
    */
    async remove(req, res){
        var ID = req.params.id;
        const users = await User.deleteOne({_id: new mongodb.ObjectID(ID.toString())}, (err) =>{
            if(err) {
                res.json({msg : 'Failed!'});
            } else {
                res.json({msg : 'Deleted Successfully!'});
            }  
        });
    },
}


module.exports = userController;