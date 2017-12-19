import { Account } from 'gittoken-redux-actions'


const DEFAULT_STATE = {
  account: new Account({ profileApiUrl: 'https://gittoken.io/api/profile' })
}


export default function Actions(state=DEFAULT_STATE, action) {
  const { type, id, value } = action
  switch(type) {
    default:
      return state;
  }
}
