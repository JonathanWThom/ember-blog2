import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    // return this.store.findAll('post');

    return Ember.RSVP.hash({
      posts: this.store.findAll('post'),
      comments: this.store.findAll('comment')
    });
  }
});
