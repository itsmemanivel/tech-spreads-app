const { User } = require('../models/index').User;

const userController = {
    async index(req, res){
        const users = await User.find({});
        res.send(users);
    },

    async show(req, res){
        const users = await User.findById(req.params.id);
        res.send(users);
    }
}


module.exports = userController;