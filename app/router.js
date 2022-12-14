import EmberRouter from '@ember/routing/router';
import config from 'lexie-cpa/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('photo', { path: '/photo/:photo_id' });
  this.route('cart');
});
