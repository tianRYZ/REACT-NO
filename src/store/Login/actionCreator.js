import * as actionTypes from './constant'

export const setLogin = (user) => ({
  type: actionTypes.SET_LOGIN,
  user
})

export const outLogin = () => ({
  type: actionTypes.OUT_LOGIN
})