'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Actions;

var _gittokenReduxActions = require('gittoken-redux-actions');

var DEFAULT_STATE = {
  account: new _gittokenReduxActions.AccountActions({ url: 'https://gittoken.io/api/profile' })
};

function Actions() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_STATE;
  var action = arguments[1];
  var type = action.type,
      id = action.id,
      value = action.value;

  switch (type) {
    default:
      return state;
  }
}