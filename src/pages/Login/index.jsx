import React, { memo } from 'react'
import { useDispatch } from 'react-redux'
import LoginView from './LoginView'
import { setLogin } from '../../store/Login'

const Login = memo(() => {
  const dispatch = useDispatch()
  const loginHandle = (data) => {
    dispatch(setLogin(data)) // 通过dispatch 将数据存储到redux中 
    localStorage.setItem('User', JSON.stringify(data))
    window.history.back()
  }
  return (
    <div>
      <LoginView onLoginEvent={loginHandle} />
    </div>
  )
})

export default Login