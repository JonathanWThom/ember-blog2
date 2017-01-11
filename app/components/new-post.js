import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    postFormShow() {
      this.set('addNewPost', true);
    },
    savePost() {
      var params = {
        title: this.get('title'),
        date: this.get('date'),
        content: this.get('content'),
        image: this.get('image')
      };
      this.set('addNewPost', false);
      this.sendAction('savePost', params);
    }
  }
});
