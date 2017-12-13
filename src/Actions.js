import { AccountActions } from 'gittoken-redux-actions'


const DEFAULT_STATE = {
  account: new AccountActions({ url: 'https://alpha.gittoken.io/api/profile' })
}


export default function Actions(state=DEFAULT_STATE, action) {
  const { type, id, value } = action
  switch(type) {
    default:
      return state;
  }
}
