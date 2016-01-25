import Ember from 'ember';

export default Ember.Controller.extend({
    session: Ember.inject.service(),

    roomController: Ember.inject.controller('rooms.room'),

    text: null,

    actions: {
        saveMessage(){
            let text = this.get('text');
            let room = this.get('roomController').get('model');
            let self = this;

            var userId = this.get('session.session.authenticated.user.id');

            this.store.find('user', userId).then((user) => {
                let msg = this.store.createRecord('message', {
                    text: text,
                    user: user,
                    room: room
                });

                msg.save().then((response) => {
                    Ember.Logger.debug("success");
                    Ember.Logger.debug(response);

                    //self.get('model').reload();
                    room.save();
                },(error) => {
                    Ember.Logger.debug(error);
                });

            }, (error) => {
                Ember.Logger.debug(error);
            }).finally(()=>{
                self.set('text', null);
            });
        }
    }
});
