'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DEFAULT_STATE = {
  address: '0x0',
  organizations: {}
};

var Registry = function Registry() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? DEFAULT_STATE : arguments[0];
  var action = arguments[1];
  var type = action.type;
  var id = action.id;
  var value = action.value;

  switch (type) {
    case 'SET_REGISTRY_DETAILS':
      return _extends({}, state, _defineProperty({}, id, value));
      break;
    case 'SET_REGISTRY_ORGANIZATION_DETAILS':
      return _extends({}, state, {
        organizations: _extends({}, state['organizations'], _defineProperty({}, id, value))
      });
      break;
    default:
      return state;
  }
};

exports.default = Registry;