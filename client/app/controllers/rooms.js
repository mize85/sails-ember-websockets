import Ember from 'ember';

export default Ember.Controller.extend({
    name: null,

    actions: {
        createRoom(){
            let name = this.get('name');
            let room = this.store.createRecord('room', {name: name});

            room.save().then((response) => {
                Ember.Logger.debug("success");
                Ember.Logger.debug(response);
            }, (error) => {
                Ember.Logger.debug(error);
            }).finally(()=>{
                this.set('name', null);
            });
        }
    }
});
