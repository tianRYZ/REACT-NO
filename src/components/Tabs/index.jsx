import React, { memo, useState } from 'react'
import './style.less'
const Tabs = memo((props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  function titleClass(index) {
    return index === currentIndex ? 'Tab_title active' : 'Tab_title'
  }

  function tabClickHandle(index) {
    setCurrentIndex(index)
  }
  return (
    <div>
      <ul className="Tab_title_wrap">
        {
          React.Children.map(props.children, (element, index) => {
            return <li onClick={() => tabClickHandle(index)} className={titleClass(index)} key={index}>{element.props.label}</li>
          })
        }
      </ul>
      <div>
        {
          React.Children.map(props.children, (element, index) => {
            return (
              <div>
                {currentIndex === index ? element.props.children : ''}
              </div>
            )
          })
        }
      </div>
    </div>
  )
})

export default Tabs