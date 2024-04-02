import * as actionTypes from './constant'


const initialState = {
  user: {
    token: '',
    nick: '',
  }
}
function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_LOGIN:
      return {
        user: action.user
      }
    case actionTypes.OUT_LOGIN:
      return {
        user: {
          token: '',
          nick: ''
        }
      }
    default:
      return state;
  }
}

export default reducer