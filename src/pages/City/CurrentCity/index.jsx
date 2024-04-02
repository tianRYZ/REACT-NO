import React, { memo } from 'react'
import PropTypes from 'prop-types'
import './style.less'

const CurrentCity = memo((props) => {
  const { city } = props;
  return (
    <div className='current-city'>
      <h2>当前城市:{city}</h2>
    </div>
  )
})

CurrentCity.PropTypes = {
  city: PropTypes.string
}
export default CurrentCity