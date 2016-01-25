import DS from 'ember-data';

export default DS.Model.extend({
    user: DS.belongsTo('user'),
    createdAt: DS.attr('date'),
    text: DS.attr('string'),
    room: DS.belongsTo('room')
});
