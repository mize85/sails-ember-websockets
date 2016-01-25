import Ember from 'ember';

export default Ember.Controller.extend({
    session: Ember.inject.service(),
    text: null,

    actions: {
        saveMessage(){
            let text = this.get('text');
            let room = this.get('model');
            let self = this;

            var userId = this.get('session.session.authenticated.user.id');

            this.store.find('user', userId).then((user) => {
                let msg = this.store.createRecord('message', {
                    text: text,
                    user: user,
                    room: room
                });

                msg.save().then(function(response){
                    Ember.Logger.debug("success");
                    Ember.Logger.debug(response);

                    room.get('messages').pushObject(response);

                    room.save().then((response) => {
                        Ember.Logger.debug("success");
                        Ember.Logger.debug(response);
                    }, (error) => {
                        Ember.Logger.debug(error);
                    }).finally(()=>{
                        self.set('text', null);
                    });

                }, function(error){
                    Ember.Logger.debug(error);
                });

            }, function(error){
                Ember.Logger.debug(error);
            });
        }
    }
});
