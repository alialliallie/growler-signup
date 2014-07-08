window.Growlers = Ember.Application.create();
// Growlers.ApplicationAdapter = DS.RESTAdapter.extend({
// });

Growlers.GrowlersRoute = Ember.Route.extend({
  model: function() {
    return {
      beers: this.store.find('beer')
    };
  }
});

Growlers.GrowlersResultsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('beer');
  },
  renderTemplate: function(controller) {
    this.render('growlers/results', {controller: controller});
  }
});

Growlers.GrowlersPeopleRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('person');
  },
  renderTemplate: function(controller) {
    this.render('growlers/people', {controller: controller});
  }
});

