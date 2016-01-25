/**
 * MessageController
 *
 * @description :: Server-side logic for managing messages
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    findOne: function(req, res){
        Message.findOne({id: req.param("id")}).exec(function(err, message) {
            if (err) {
                return res.badRequest({
                    error: err
                });
            }
            if (!message || message.length < 1) {
                return res.badRequest({
                    error: 'No such message'
                });
            }
            return res.json({
                message: message
            });
        });
    }
};

