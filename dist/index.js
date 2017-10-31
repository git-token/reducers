'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Account = require('./Account.js');

var _Account2 = _interopRequireDefault(_Account);

var _Registry = require('./Registry.js');

var _Registry2 = _interopRequireDefault(_Registry);

var _Admin = require('./Admin.js');

var _Admin2 = _interopRequireDefault(_Admin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var modules = {
  Account: _Account2.default,
  Registry: _Registry2.default,
  Admin: _Admin2.default
};

exports.default = modules;