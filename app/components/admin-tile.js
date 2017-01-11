import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(post) {
      if(confirm('Arm you sure you want to delete this blog post?')) {
        this.sendAction('destroyPost', post);
      }
    }
  }
});
