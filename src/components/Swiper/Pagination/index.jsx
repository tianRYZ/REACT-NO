import React, { memo } from 'react'
import classnames from "classnames"
import "./style.less"

const Pagination = memo((props) => {
  const { len, currentIndex } = props;
  let arr = new Array(len).fill(1);
  return (
    <div className="swiper-pagination">
      <ul>
        {
          arr.map((ele, index) => {
            return <li className={classnames({ 'selected': currentIndex === index })} key={index}></li>
          })
        }
      </ul>
    </div>
  )
})

export default Pagination