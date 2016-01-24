/*import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  coalesceFindRequests: true,
  namespace: 'api/v1',
  //this is dependent on production/development environment
  //It is configured in config/environment.js
  //host: ClientENV.hostUrl
  //add IP from $DOCKER_HOST if --docker flag is set
  //host: 'http://192.168.59.103:1337'
});*/

// file: app/adapters/application.js
import SailsSocketAdapter from 'ember-data-sails/adapters/sails-socket';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default SailsSocketAdapter.extend(DataAdapterMixin, {
  authorizer: 'authorizer:oauth2',

  /**
   * Whether to use CSRF tokens or not
   */
  useCSRF:              false, //true,

    log: true,
  /**
   * The path to use when the CSRF token needs to be retrieved
   * Default is `/csrfToken`, if not heading `/` it'll be relative to `namespace`
   */
  //csrfTokenPath: 'some/custom/path',
  /**
   * Whether to group multiple find by ID with one request with a `where`
   */
  coalesceFindRequests: true,
  /**
   * The namespace of your API
   */
  namespace:            'api/v1',

    subscribeEndpoint: '/sockets/subscribe'




});