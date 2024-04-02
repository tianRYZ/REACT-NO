import * as actionTypes from './constant';

const initialState = {
  cityName: '西安'
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.INIT_CITY:
      return { cityName: action.cityName };
    case actionTypes.CHANGE_CITY:
      return { cityName: action.cityName };
    default:
      return state;
  }
}

export default reducer
