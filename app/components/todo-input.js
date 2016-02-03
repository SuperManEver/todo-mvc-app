import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submitTodo: function(newTitle) {
      if(newTitle) {
        // send 'default' action with `newTitle` value as an argument
        this.sendAction('action', newTitle);
      }
      this.set('newTitle', '');
    }
  }
});
