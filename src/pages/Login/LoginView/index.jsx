import React, { memo, useState } from 'react'
import classnames from "classnames"
import api from '../../../api'
import './style.less'

const LoginView = memo((props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})
  const onSubmitHandle = (e) => {
    e.preventDefault();
    api.login({ username, password }).then((res) => {
      if (res.data.status === 200) {
        props.onLoginEvent(res.data);
      }
    })
  }

  const changeHandle = (e) => {
    if (e.target.name === 'username') {
      setUsername(e.target.value)
    } else if (e.target.name === 'password') {
      setPassword(e.target.value)
    }
  }


  return (
    <div id="login-container">
      <form onSubmit={onSubmitHandle}>
        <div className={classnames('input-container phone-container', { 'input-container-error': errors.username })}>
          <i className="icon-tablet"></i>
          <input
            type="text"
            name="username"
            placeholder="用户名/手机号"
            value={username}
            onChange={changeHandle}
          />
        </div>
        <div className={classnames('input-container password-container', { 'input-container-error': errors.password })}>
          <i className="icon-key"></i>
          <button>发送验证码</button>
          <input
            type="password"
            name="password"
            placeholder="输入验证码"
            value={password}
            onChange={changeHandle}
          />
        </div>
        <button className="btn-login">登录</button>
      </form>
    </div>
  )
})

export default LoginView