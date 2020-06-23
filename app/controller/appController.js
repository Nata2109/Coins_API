'use strict';

var Task = require('../model/appModel.js');

exports.list_all_coins = function(req, res) {
  Task.getAllCoins(function(err, task) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', task);
    res.send(task);
  });
};