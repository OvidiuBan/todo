define([
  'backbone',
  'views/app_view'
], function (Backbone, AppView) {
  var Router = Backbone.Router.extend({
      routes: {
        "(?:params)": "index"
      },

      index: function () {
        var appView = new AppView();
        $('body').html(appView.render().$el);
      }
    },
    {
      initialize: function () {
        return new Router();
      }
    });

  return Router;
});
