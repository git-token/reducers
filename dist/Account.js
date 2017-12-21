'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DEFAULT_STATE = {
  address: '0x0',
  profile: {},
  email: '',
  menu: [{
    key: 'register',
    title: 'Register Organization',
    link: '/register'
  }, {
    key: 'contributions',
    title: 'Contribution Activity',
    link: '/contributions'
  }],
  // organizations: [],
  // dummy data
  organizations: [{
    "login": "git-token",
    "id": 29322650,
    "url": "https://api.github.com/orgs/git-token",
    "repos_url": "https://api.github.com/orgs/git-token/repos",
    "events_url": "https://api.github.com/orgs/git-token/events",
    "hooks_url": "https://api.github.com/orgs/git-token/hooks",
    "issues_url": "https://api.github.com/orgs/git-token/issues",
    "members_url": "https://api.github.com/orgs/git-token/members{/member}",
    "public_members_url": "https://api.github.com/orgs/git-token/public_members{/member}",
    "avatar_url": "https://avatars3.githubusercontent.com/u/29322650?v=4",
    "description": "Issue and Earn Ethereum Tokens for Git Contributions!"
  }]
};

var Account = function Account() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_STATE;
  var action = arguments[1];
  var type = action.type,
      id = action.id,
      value = action.value;

  switch (type) {
    case 'SET_ACCOUNT_DETAILS':
      return _extends({}, state, _defineProperty({}, id, value));
      break;
    default:
      return state;
  }
};

exports.default = Account;