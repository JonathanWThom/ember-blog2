import Ember from 'ember';

export default Ember.Route.extend({
  // model() {
  //   this.store.findAll('post').then(function(posts) {
  //     return posts.objectAt(1);
  //   });
  // }

  model() {
    return this.store.findAll('post');
  }
});
