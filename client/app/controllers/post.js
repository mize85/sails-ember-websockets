import Ember from 'ember';

export default Ember.Controller.extend({


    name: null,
    body: null,

    actions: {
        savePost(){
            var name = this.get('name');
            var body = this.get('body');
            var created = new Date();

            let post = this.store.createRecord('post', {
                name: name,
                body:body,
                created: created
            });

            post.save().then(function(response){
                Ember.Logger.debug("success");
                Ember.Logger.debug(response);
            }, function(error){
                Ember.Logger.debug(error);
            });

        }
    }
});
