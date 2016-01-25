import Ember from 'ember';

export default Ember.Route.extend({
    model: function(params){
        var roomId = this.modelFor('rooms.room').get('id');
        return this.store.query('message', {room: roomId});
    }
});
