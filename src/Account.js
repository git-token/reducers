const DEFAULT_STATE = {
  account: '0x0'
}

export default function Account(state=DEFAULT_STATE, action) {
  const { type, id, value } = action;
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
