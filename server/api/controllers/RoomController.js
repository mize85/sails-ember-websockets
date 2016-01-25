/**
 * RoomController
 *
 * @description :: Server-side logic for managing rooms
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    findOne: function(req, res){
        Room.findOne({id: req.param("id")}).exec(function(err, room) {
            if (err) {
                return res.badRequest({
                    error: err
                });
            }
            if (!room || room.length < 1) {
                return res.badRequest({
                    error: 'No such room'
                });
            }
            return res.json({
                room: room
            });
        });
    }
};

