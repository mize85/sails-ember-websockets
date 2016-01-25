import DS from 'ember-data';

export default DS.Model.extend({
    messages: DS.hasMany('message'),
    participants: DS.hasMany('user'),
    name: DS.attr('string')
});
