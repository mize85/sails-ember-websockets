import DS from 'ember-data';

export default DS.Model.extend({
    user: DS.belongsTo('user'),
    created: DS.attr('date'),
    text: DS.attr('string')
});
