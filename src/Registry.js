const DEFAULT_STATE = {
  organizations: {}
}

export default function Registry(state=DEFAULT_STATE, action) {
  const { type, id, value } = action;
  switch(type) {
    case 'SET_REGISTRY_DETAILS':
      return {
        ...state,
        [id]: value
      }
      break;
    default:
      return state;
  }
}
