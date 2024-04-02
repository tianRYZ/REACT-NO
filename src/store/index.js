import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from 'redux-thunk'
import BottomReducer from './Bottom'
import CityReducer from './City'
import SearchReducer from './Search'
import LoginReducer from './Login'
import CollectReducer from './Collect'
const reducer = combineReducers({
  Bottom: BottomReducer,
  CityInfo: CityReducer,
  Search: SearchReducer,
  Login: LoginReducer,
  Collect: CollectReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;