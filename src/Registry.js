const DEFAULT_STATE = {
  address: '0x0',
  organizations: {}
}

const Registry = function(state=DEFAULT_STATE, action) {
  const { type, id, value } = action
  switch(type) {
    case 'SET_REGISTRY_DETAILS':
      return {
        ...state,
        [id]: value
      }
      break;
    case 'SET_REGISTRY_ORGANIZATION_DETAILS':
      return {
        ...state,
        organizations: {
          ...state['organizations'],
          [id]: value
        }
      }
      break;
    default:
      return state;
  }
}


export default Registry
