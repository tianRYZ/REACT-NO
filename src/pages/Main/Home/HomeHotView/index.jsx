import PropTypes from 'prop-types'
import React, { memo } from 'react'
import './style.less'
const HomeHotView = memo((props) => {
  const { hot1list, title, citys } = props;
  return (
    <div className='hotproduct'>
      <h4>{title}</h4>
      <div className='hotcontainer'>
        <ul className='clear-fix'>
          {
            hot1list.map((item, index) => {
              return (
                <li key={index}>
                  <a href={item.link}>
                    <img src={item.img} alt='' />
                    <span>{citys}-{item.title}</span>
                  </a>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
})

HomeHotView.propTypes = {
  hot1list: PropTypes.array
}

export default HomeHotView