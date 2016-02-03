import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('todo').then( todos => {
      return todos.filterBy('complete', false);
    });
  },
  renderTemplate: function(controller, model) {
    this.render('todos.index', {
      model: model
    });
  }
});
