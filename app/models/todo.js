import DS from 'ember-data';

var Todo = DS.Model.extend({
  title:      DS.attr('string'),
  complete:   DS.attr('boolean')
});

Todo.reopenClass({
  FIXTURES: [
    {id: 1, title: 'Buy Eggs', complete: false},
    {id: 2, title: 'Buy Milk',complete: false },
    {id: 3, title: "Become member of the core team", complete: false},
    {id: 4, title: "become millionare", complete: false}
  ]
});

export default Todo;