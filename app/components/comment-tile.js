import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateComment(comment, params) {
      this.sendAction('updateComment', comment, params);
    }
  }
});
