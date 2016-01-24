import Ember from 'ember';

export default Ember.Controller.extend({
    session: Ember.inject.service(),
    text: null,

    actions: {
        saveMessage(){
            var text = this.get('text');
            var created = new Date();
            var userId = this.get('session.session.authenticated.user.id');

            this.store.find('user', userId).then((user) => {
                let msg = this.store.createRecord('message', {
                    text: text,
                    created: created,
                    user: user
                });

                msg.save().then(function(response){
                    Ember.Logger.debug("success");
                    Ember.Logger.debug(response);
                }, function(error){
                    Ember.Logger.debug(error);
                });

            }, function(error){
                Ember.Logger.debug(error);
            });



        }
    }
});
