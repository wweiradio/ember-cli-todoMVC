
import Ember from "ember";

export default Ember.ObjectController.extend({
    isCompleted: function(key, value) {
        //key is the isCompleted as in checked=todo.isCompleted
        var model = this.get('model');
        if (value === undefined) {
            //key is isCompleted
            //return model.get('isCompleted');
            return model.get(key);
        } else {
            model.set(key, value);
            model.save();
            return value;
        }

    }.property('modal.isCompleted'),

    actions: {
        
        editTodo:function() {
            this.set('isEditing', true);
        },

        acceptChanges:function() {
            console.log("in acceptChanges");
            this.set("isEditing", false);
            if(Ember.isEmpty(this.get('model.title'))) {
                this.send('removeTodo');
            } else {
                this.get('model').save();
            }
        },

        removeTodo:function() {
            var todo = this.get('model');
            todo.deleteRecord();
            todo.save();
        }

    },
    isEditing: false,

});

