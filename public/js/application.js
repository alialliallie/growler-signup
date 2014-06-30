window.Growlers = Ember.Application.create();

Growlers.GrowlersResultsRoute = Ember.Route.extend({
  renderTemplate: function(controller) {
    this.render('growlers/results', {controller: controller});
  }
});

Growlers.GrowlersPeopleRoute = Ember.Route.extend({
  renderTemplate: function(controller) {
    this.render('growlers/people', {controller: controller});
  }
});
