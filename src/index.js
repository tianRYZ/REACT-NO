
import React from 'react';
import ReactDOM from 'react-dom/client';
// 引入tailwindcss
import './index.css'
// 引入本地样式
import "./assets/css/common.less"
import "./assets/css/font.css"
import "./assets/css/iconfont.css"
import App from './App'
import { Provider } from 'react-redux';
import store from './store';
import init from './utils/init'
/**
 * 判断是否已经更新了
 */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);