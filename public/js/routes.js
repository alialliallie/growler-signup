Growlers.Router.map(function() {
  this.resource('growlers', { path: '/' }, function() {
    this.route('results');
    this.route('people');
  });
});
