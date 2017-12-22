const DEFAULT_STATE = {
  activeStep: 'welcome',
  steps: {
    welcome: {
      title: 'Welcome',
      link: '/account/setup/'
    },
    terms: {
      title: 'Terms of Service',
      link: '/account/setup/terms'
    },
    metamask: {
      title: 'Setup MetaMask',
      link: '/account/setup/metamask'
    },
    verify: {
      title: 'Verify Account',
      link: '/account/setup/verify'
    },
    organization: {
      title: 'Register Organization',
      link: '/account/setup/organization'
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
