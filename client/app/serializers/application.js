import DS from 'ember-data';


import SailsSerializer from 'ember-data-sails/serializers/sails';
import SailsSocketAdapter from 'ember-data-sails/adapters/sails-socket';

export default SailsSerializer.extend({


    normalizeResponse: function (store, type/*, payload, id, requestType*/) {
        var adapter, modelName, isUsingSocketAdapter;
        // this is the only place we have access to the store, so that we can get the adapter and check
        // if it is an instance of sails socket adapter, and so register for events if necessary on that
        // model. We keep a cache here to avoid too many calls
        if (!this._modelsUsingSailsSocketAdapter) {
            this._modelsUsingSailsSocketAdapter = Object.create(null);
        }
        modelName = type.modelName;
        if (this._modelsUsingSailsSocketAdapter[modelName] === undefined) {
            adapter = store.adapterFor(modelName);
            this._modelsUsingSailsSocketAdapter[modelName] = isUsingSocketAdapter = adapter instanceof SailsSocketAdapter;
            if (isUsingSocketAdapter) {
                adapter._listenToSocket(modelName);
            }
        }
        return this._super.apply(this, arguments);
    },

});