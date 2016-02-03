import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNameBindings: ['editing'],
  editing: false,
  classNames: ['completed'],
  actions: {
    editTodo: function() {
      this.toggleProperty('editing');
    },
    updateTodo: function() {
      let todo = this.get('todo');
      if(todo.get('title') === '') {
        this.sendAction('deleteTodo', todo);
      } else {
        todo.save();
      }
      this.set('editing', false);
    },
    deleteTodo: function() {
      let todo = this.get('todo');
      this.sendAction('deleteTodo', todo);
    }
  }
});
