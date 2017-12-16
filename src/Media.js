const DEFAULT_STATE = {
  rtmpUrl: 'rtmp://138.68.225.133/live/gittoken'
}

const Media = function(state=DEFAULT_STATE, action) {
  const { type, id, value } = action
  switch(type) {
    case 'SET_MEDIA_DETAILS':
      return {
        ...state,
        [id]: value
      }
      break;
    default:
      return state;
  }
}

export default Media
