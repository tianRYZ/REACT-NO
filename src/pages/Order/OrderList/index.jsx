import React, { memo, useEffect, useState } from 'react'
import api from '../../../api'
import OrderListView from './OrderListView';

const OrderList = memo((props) => {

  const [orderListData, setOrderListData] = useState([]);
  useEffect(() => {
    getOrderList();
  }, [])
  const getOrderList = () => {
    api.comentOrder({ username: props.user }).then((res) => {
      switch (res.data.status) {
        case 200:
          console.log(res.data.result);
          setOrderListData(res.data.result)
          break;
      }
    }).catch((err) => {
      console.log(err);
    })
  }
  return (
    <div>
      {orderListData.length > 0 ? <OrderListView data={orderListData} user={props.user} /> : <div>暂无数据</div>}

    </div>
  )
})

export default OrderList