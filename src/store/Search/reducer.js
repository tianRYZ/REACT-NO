import * as actionTypes from './constant';


const initialState = {
  search: ''
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.UPDATE_SEARCH:
      return { search: action.search };
    default:
      return state;
  }
}

export default reducer
