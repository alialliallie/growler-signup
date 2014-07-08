Growlers.VoteFormComponent = Ember.Component.extend({
  tagName: 'form',
  actions: {
    vote: function() {
      console.log(this.get('voterName'), this.get('selectedBeer'), this.get('nextFriday'));
    }
  },
  nextFriday: "7/18/2014"
});
