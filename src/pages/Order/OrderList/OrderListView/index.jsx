import React, { memo } from 'react'
import OrderItem from './Item';

const OrderListView = memo((props) => {
  return (
    <div className='orderlist'>
      {
        props.data.map((item, index) => {
          return <OrderItem key={index} data={item} user={props.user} />
        })
      }
    </div>
  )
})

export default OrderListView