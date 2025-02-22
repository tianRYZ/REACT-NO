import React, { memo, useState, useRef, useEffect } from 'react'
import api from '../../../../../api';
import './style.less'

const OrderItem = memo((props) => {
  const data = props.data;
  const [currentComment, setCurrentComment] = useState(0);
  const commentContent = useRef();
  useEffect(() => {
    console.log(data, '--提交数据');
  }, [])
  const clickHandle = () => {
    setCurrentComment(1)
  }

  const onSubmitHandle = () => {
    console.log(props.user.nick, props.data.id, '传参', commentContent.current.value);
    api.submitComment({ id: props.data.id, username: props.user.nick, content: commentContent.current.value }).then((res) => {
      console.log(res, '==resc', res.status);
      switch (res.status) {
        case 200:
          setCurrentComment(2)
          break;
        default:
          setCurrentComment(0);
          break;
      }
    }).catch((err) => {
      console.log('err', err);
    })
  }
  const onCancelHandle = () => {
    setCurrentComment(0)
  }
  return (
    <div className="order-item-container clear-fix">
      <div className="order-item-img float-left">
        <img src={data.img} alt="" />
      </div>
      <div className="order-item-comment float-right">
        {currentComment === 0
          ? <button onClick={clickHandle} className="btn">评价</button> : currentComment === 1 ? '' : <button className="unseleted-btn btn" disabled>已评价</button>
        }
      </div>
      <div className="order-item-content">
        <span>商户：{data.title}</span>
        <span>类型：{data.houseType}</span>
        <span>价格：{data.price}</span>
      </div>
      {
        currentComment === 1 ? <div className="comment-text-container">
          <textarea ref={commentContent} className="comment-text" style={{ width: "100%", height: '80px' }}></textarea>
          <button onClick={onSubmitHandle} className="btn">提交</button>
          <button onClick={onCancelHandle} className="btn unseleted-btn">取消</button>
        </div> : ""
      }
    </div>
  )
})

export default OrderItem