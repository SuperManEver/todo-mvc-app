import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNames: ['completed'],
  classNameBindings: ['editing'],
  editing: false,
  actions: {
    editTodo: function() {
      this.toggleProperty('editing');
    },
    updateTodo: function() {
      this.get('todo').save();
      this.toggleProperty('editing');
    }
  }
});
