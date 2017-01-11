import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    destroyPost(post) {
      if(confirm('Arm you sure you want to delete this blog post?')) {
        this.sendAction('destroyPost', post);
      }
    },
    update(post, params) {
      this.sendAction('update', post, params);
    },
    deleteComment(comment) {
      this.sendAction('deleteComment', comment);
    }
  }
});
