import * as actionTypes from './constant';

export const initCity = (cityName) => ({
  type: actionTypes.INIT_CITY,
  cityName
})

export const changeCity = (cityName) => ({
  type: actionTypes.CHANGE_CITY,
  cityName
})

