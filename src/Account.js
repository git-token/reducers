const DEFAULT_STATE = {
  address: '0x0',
  profile: {},
  email: ''
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
