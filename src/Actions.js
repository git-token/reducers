import { Account } from 'gittoken-redux-actions/dist/'


const DEFAULT_STATE = {
  account: new Account({ accountApiUrl: `https://gittoken.io/api/account` })
}


export default function Actions(state=DEFAULT_STATE, action) {
  const { type, id, value } = action
  switch(type) {
    default:
      return state;
  }
}
