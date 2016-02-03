import Ember from 'ember';

export default Ember.Controller.extend({
  remaining: Ember.computed('model.@each.complete', function() {
    var leftTodos = this.get('model').filterBy('complete', false);
    return leftTodos.get('length');
  }),
  inflector: Ember.computed('remaining', function() {
    var remaining = this.get('remaining');
    return remaining === 1 ? 'item' : 'items';
  }),
  completed: Ember.computed('model.@each.complete', function() {
    return this.get('model').filterBy('complete', true);
  }),
  completedAmount: Ember.computed('completed', function() {
    var completed = this.get('completed');
    return completed.get('length');
  }),
  hasCompleted: Ember.computed('completedAmount', function() {
    let n = this.get('completedAmount');
    return n > 0 ? true : false
  }),
  actions: {
    deleteCompleted: function() {
      let completed = this.get('completed');
      completed.forEach( i => { 
        i.deleteRecord()
        i.save();
      });
    }
  }
});