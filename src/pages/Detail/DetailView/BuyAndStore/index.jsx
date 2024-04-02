import React, { memo } from 'react'
import BuyAndView from '../BuyAndView'
import { useSelector } from 'react-redux'
const BuyAndStore = memo((props) => {

  const login = useSelector(state => state.Login.user);
  const collect = useSelector(state => state.Collect.collect)
  // const { user } = useSelector((state) => ({
  //   login: state.Login.user
  // }))
  return (
    <div className=' fixed left-0 right-0 bottom-0'>
      <BuyAndView id={props.id} login={login} collect={collect} />
    </div>
  )
})

export default BuyAndStore