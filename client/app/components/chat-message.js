import Ember from 'ember';

export default Ember.Component.extend({

    classNames: ['chat-message'],
    model: null,
    currentUser: null,

    classNameBindings: ['bubbleClass'],

    bubbleClass: Ember.computed('model.user.isFulfilled', function(){

        let currentUser = this.get('currentUser');
        let owner = this.get('model.user.content.id');

        if(currentUser && owner){
            let isMe  = parseInt(currentUser) === parseInt(owner);
            let meOrYou = isMe ? "me" : "you";
            return `bubble ${meOrYou}`;
        }

    })

});
