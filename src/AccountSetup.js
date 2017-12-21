const DEFAULT_STATE = {
  activeStep: 'welcome',
  steps: {
    welcome: {
      title: 'Welcome',
      link: '/account/setup/'
    },
    metamask: {
      title: 'Setup MetaMask',
      link: '/account/setup/metamask'
    },
    registerAccount: {
      title: 'Register Account',
      link: '/account/setup/register_account'
    },
    registerOrg: {
      title: 'Register Organization',
      link: '/account/setup/register_org'
    },
    finish: {
      title: 'Finish',
      link: '/account/setup/finish'
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
