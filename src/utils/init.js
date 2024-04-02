import { setLogin } from '../store/Login'
import store from '../store'

if (localStorage.getItem('User')) {
  store.dispatch(setLogin(JSON.parse(localStorage.getItem('User'))))
}
