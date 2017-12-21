const DEFAULT_STATE = {
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
    },
  }
}

const AccountSetup = function(state=DEFAULT_STATE, action) {
  const { type, id, value } = action
  switch(type) {
    case 'SET_ACCOUNT_SETUP_DETAILS':
      return {
        ...state,
        [id]: value
      }
      break;
    default:
      return state;
  }
}

export default AccountSetup
