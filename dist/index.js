'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Account = require('./Account.js');

var _Account2 = _interopRequireDefault(_Account);

var _Registry = require('./Registry.js');

var _Registry2 = _interopRequireDefault(_Registry);

var _Register = require('./Register.js');

var _Register2 = _interopRequireDefault(_Register);

var _Admin = require('./Admin.js');

var _Admin2 = _interopRequireDefault(_Admin);

var _Layout = require('./Layout.js');

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var modules = {
  Account: _Account2.default,
  Register: _Register2.default,
  Registry: _Registry2.default,
  Admin: _Admin2.default,
  Layout: _Layout2.default
};

exports.default = modules;