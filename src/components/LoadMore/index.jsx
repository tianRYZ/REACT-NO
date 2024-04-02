import React, { memo, useEffect, useRef, useState } from 'react'
import './style.less'

const LoadMore = memo((props) => {
  const more = useRef(); // 存储加载更多的状态值
  const [loadTop, setLoadTop] = useState(1000)
  useEffect(() => {
    let timer = null;
    let winHeight = document.documentElement.clientHeight;// 视口高度
    function scrollHandle() {
      if (more.current) {// 判断div结构是否存在  
        setLoadTop(more.current.getBoundingClientRect().top)
        if (timer) {
          clearTimeout(timer);
        } else {
          timer = setTimeout(() => {
            if (winHeight > loadTop) {
              console.log('111loadMore');
              props.onLoadMore();
              // 回调事件  子--> 父 
            }
          }, 300)
        }
      }
    }

    window.addEventListener('scroll', scrollHandle)
    return () => {
      window.removeEventListener('scroll', scrollHandle)
      // 清除定时器
      // clearTimeout(timer)
    }
  }, [loadTop])

  return (
    <div className='load' ref={more}>加载更多</div>
  )
})

/**
 * 上拉加载更多实现  
 * 1. 监听滚动事件   滚动高度+视口高度 > 容器列表高度
 * 2. getBoundingClientRect 动态获取距离顶部的距离 
 * 
 * useEffect中相同的值会被缓存掉
 * 防抖：在一个期限值(时间间隔)内，如果发起多次请求，以最后一次为准
   节流：在一个期限值(时间间隔)内，只发起一次请求
 */
export default LoadMore