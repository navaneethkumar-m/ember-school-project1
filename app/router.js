import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});
// this is test comment
// I am in branch now..
Router.map(function() {
});

export default Router;
