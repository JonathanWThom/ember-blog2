import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    // return this.store.findAll('post');

    return Ember.RSVP.hash({
      posts: this.store.findAll('post'),
      comments: this.store.findAll('comment').then(function(result){
        return result.slice(0,3);
      })
    });
  }
});


// comments: this.store.findAll('comment').then(function(result) {
//   return result.slice(0,2);
// });
