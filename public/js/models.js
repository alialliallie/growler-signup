Growlers.Store = DS.Store.extend();

Growlers.Beer = DS.Model.extend({
  name: DS.attr('string'),
  percentage: DS.attr('number')
});

Growlers.Person = DS.Model.extend({
  name: DS.attr('string')
});
