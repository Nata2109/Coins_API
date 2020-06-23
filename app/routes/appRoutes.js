'use strict';
module.exports = function(app) {
  var coins = require('../controller/appController');

  app.route('/coins')
    .get(coins.list_all_coins);

};
