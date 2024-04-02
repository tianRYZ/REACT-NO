import React, { memo, useEffect, useState } from 'react';
import { withRouter } from "react-router-dom"
// import { setLogin } from '../../store/'
import { removeCollect, setCollect } from '../../../../store/Collect'
import { useDispatch } from 'react-redux';
const BuyAndView = memo((props) => {
  const [isSelect, setIsSelect] = useState(true)
  const dispatch = useDispatch();
  useEffect(() => {
    setIsSelect(isStore())
  }, [])
  const storeHandle = () => {
    if (props.login.token) {
      // 允许
      if (isStore()) {
        // 已经收藏了
        setIsSelect(true)

        dispatch(removeCollect(props.id))
      } else {
        // 未收藏
        setIsSelect(false)

        dispatch(setCollect(props.id))
      }
    } else {
      props.history.push('/login')
    }
  }

  const isStore = () => {
    let collects = props.collect;
    let id = props.id;
    return collects.some(item => {
      return item == id;
    })
  }

  // 判断是否收藏 已收藏--true  未收藏--false
  return (
    <div className="border-t border-gray-300 bg-white flex">
      <div className="flex-1 text-center float-left">
        {
          !isSelect ? <button className="w-full text-white bg-red-400 py-2" onClick={storeHandle}>收藏</button> : <button className="w-full text-white bg-[#ff7f32] py-2" onClick={storeHandle}>已收藏</button>
        }

      </div>
      <div className="flex-1 text-center float-right">
        <button className="w-full text-white bg-red-500 py-2">购买</button>
      </div>
    </div>
  );
});

export default withRouter(BuyAndView);