import * as actionTypes from './constant';

const initialState = {
  show: true,
}
function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.HIDDEN:
      return { ...state, show: action.payload }
    case actionTypes.SHOW:
      return { ...state, show: action.payload }
    default:
      return state;
  }
}

export default reducer