/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    findOne: function(req, res){
        User.findOne({id: req.param("id")}).exec(function(err, user) {
            if (err) {
                return res.badRequest({
                    error: err
                });
            }
            if (!user || user.length < 1) {
                return res.badRequest({
                    error: 'No such user'
                });
            }
            return res.json({
                user: user
            });
        });
    },/*

    find: function(req, res){

        console.log(req.query);

        if(req.query.ids){
            req.query.id = req.query.ids;
            delete req.query.ids;
        }

        User.find().where(req.query).exec(function(err, users) {
            if (err) {
                return res.badRequest({
                    error: err
                });
            }
            if (!users || users.length < 1) {
                return res.badRequest({
                    error: 'No such users'
                });
            }
            return res.json({
                users: users
            });
        });
    }*/
};