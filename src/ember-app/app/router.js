import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-lubl-заказ-l');
  this.route('i-i-s-lubl-заказ-e',
  { path: 'i-i-s-lubl-заказ-e/:id' });
  this.route('i-i-s-lubl-заказ-e.new',
  { path: 'i-i-s-lubl-заказ-e/new' });
});

export default Router;
