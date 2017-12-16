'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Account = require('./Account');

var _Account2 = _interopRequireDefault(_Account);

var _Registry = require('./Registry');

var _Registry2 = _interopRequireDefault(_Registry);

var _Register = require('./Register');

var _Register2 = _interopRequireDefault(_Register);

var _Admin = require('./Admin');

var _Admin2 = _interopRequireDefault(_Admin);

var _Layout = require('./Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _Actions = require('./Actions');

var _Actions2 = _interopRequireDefault(_Actions);

var _Media = require('./Media');

var _Media2 = _interopRequireDefault(_Media);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var modules = {
  Account: _Account2.default,
  Register: _Register2.default,
  Registry: _Registry2.default,
  Admin: _Admin2.default,
  Layout: _Layout2.default,
  Actions: _Actions2.default,
  Media: _Media2.default
};

exports.default = modules;