import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('post');
  this.route('login');
  this.route('protected');
  this.route('register');
  this.route('chat');
  this.route('users');
  this.route('rooms', function() {
    this.route('room', { path: '/:room_id' }, function() {
      this.route('messages');
    });
  });
});

export default Router;
