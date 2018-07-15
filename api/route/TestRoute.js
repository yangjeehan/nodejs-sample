'use strict';

module.exports = function(app) {
    var controller = require('../controller/TestController');
  
    app.route('/test')
      .get(controller.run);
};

