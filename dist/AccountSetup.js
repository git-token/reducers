'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DEFAULT_STATE = {
  activeStep: 'welcome',
  steps: {
    welcome: {
      title: 'Welcome',
      link: '/'
    },
    metamask: {
      title: 'Setup MetaMask',
      link: '/metamask'
    },
    registerAccount: {
      title: 'Register Account',
      link: '/register_account'
    },
    registerOrg: {
      title: 'Register Organization',
      link: '/register_org'
    },
    finish: {
      title: 'Finish',
      link: '/finish'
    }
  }
};

var AccountSetup = function AccountSetup() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_STATE;
  var action = arguments[1];
  var type = action.type,
      id = action.id,
      value = action.value;

  switch (type) {
    case 'SET_ACCOUNT_SETUP_DETAILS':
      return _extends({}, state, _defineProperty({}, id, value));
      break;
    default:
      return state;
  }
};

exports.default = AccountSetup;