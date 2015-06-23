
import DS from "ember-data";

//export default DS.FixtureAdapter.extend({});

export default DS.LSAdapter.extend({
  namespace: 'todos-emberjs',
  shouldReloadAll: function() { return false;},
});