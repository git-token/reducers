'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

exports.default = Registry;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_STATE = {
  organizations: {}
};

function Registry() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? DEFAULT_STATE : arguments[0];
  var action = arguments[1];
  var type = action.type;
  var id = action.id;
  var value = action.value;

  switch (type) {
    case 'SET_REGISTRY_DETAILS':
      return (0, _extends4.default)({}, state, (0, _defineProperty3.default)({}, id, value));
      break;
    default:
      return state;
  }
}