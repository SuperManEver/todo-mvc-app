import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('todo');
  },
  actions: {
    createTodo: function(title) {
      this.store.createRecord('todo', {
        title: title,
        complete: false
      }).save();
    },
    deleteTodo: function(todo) {
      todo.deleteRecord();
      todo.save();
    }
  }
});