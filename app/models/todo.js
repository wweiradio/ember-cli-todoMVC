
import DS from "ember-data";

var todo = DS.Model.extend({
    title: DS.attr('string'),
    isCompleted: DS.attr('boolean')
});

todo.reopenClass({

    FIXTURES:[
     {
       id: 1,
       title: 'Learn Ember.js',
       isCompleted: true
     },
     {
       id: 2,
       title: '...todo2',
       isCompleted: false
     },
     {
       id: 3,
       title: 'Profit333!',
       isCompleted: false
     }
    ]

});

export default todo; 



