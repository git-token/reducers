'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Actions;

var _dist = require('gittoken-redux-actions/dist/');

var DEFAULT_STATE = {
  account: new _dist.Account({ accountApiUrl: 'https://gittoken.io/api/account' })
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