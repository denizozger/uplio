'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports.home = _regenerator2.default.mark(function home(ctx) {
  return _regenerator2.default.wrap(function home$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return this.render('index');

        case 2:
        case 'end':
          return _context.stop();
      }
    }
  }, home, this);
});