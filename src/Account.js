const DEFAULT_STATE = {
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
  }],
  steps: {
    welcome: {
      title: 'Welcome',
      active: true,
      link: '/'
    },
    metamask: {
      title: 'Setup MetaMask',
      active: false,
      link: '/metamask'
    },
    registerAccount: {
      title: 'Register Account',
      active: false,
      link: '/register_account'
    },
    registerOrg: {
      title: 'Register Organization',
      active: false,
      link: '/register_org'
    },
    finish: {
      title: 'Finish',
      active: false,
      link: '/finish'
    },
  }
}

const Account = function(state=DEFAULT_STATE, action) {
  const { type, id, value } = action
  switch(type) {
    case 'SET_ACCOUNT_DETAILS':
      return {
        ...state,
        [id]: value
      }
      break;
    default:
      return state;
  }
}

export default Account
