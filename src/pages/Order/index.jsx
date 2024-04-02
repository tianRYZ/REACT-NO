import React, { memo, useState, useEffect } from 'react'
import OrderHeader from '../../components/PubHeader'
import UserInfo from './UserInfo'
import OrderList from './OrderList'
import { useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'
const Order = memo((props) => {
  const [orderTitle, setOrderTitle] = useState('订单评价')
  const city = useSelector(state => state.CityInfo.cityName);
  const user = useSelector(state => state.Login.user)
  useEffect(() => {
    if (!user.token) {
      props.history.push('/login')
    }
  }, [])
  return (
    <div>
      <OrderHeader title={orderTitle} />
      <UserInfo user={user} city={city} />
      <OrderList user={user} />
    </div>
  )
})

export default withRouter(Order) 