/**
 * SocketController
 *
 * @description :: Server-side logic for managing sockets
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    subscribe: function (req, res, next) {
        var ids, data = req.allParams(), model, subscribed = {};
        for (var name in data) {
            if (data.hasOwnProperty(name)) {
                model = sails.models[name];
                if (model) {
                    ids = data[name];
                    model.subscribe(req, ids);
                }
                else {
                   console.log('trying to subscribe to unknown model: ' + name);
                }
            }
        }
        res.json({});
    }
};

