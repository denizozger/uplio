'use strict';

module.exports.home = function *home(ctx) {
  yield this.render('index');
};
