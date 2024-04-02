import React, { memo, useState } from 'react'
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import "./style.less"
import propTypes from 'prop-types'
import Pagination from './Pagination';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Swiper = memo((props) => {
  const { banners } = props;
  const [index, setIndex] = useState(0);
  function handleChangeIndex(index) {
    setIndex(index);
  }
  return (
    <div className='swiper'>
      <AutoPlaySwipeableViews index={index} onChangeIndex={handleChangeIndex}>
        {
          banners.map((item, index) => {
            return (
              <div key={index} className='swiper-view'>
                <img src={item} alt='' />
              </div>
            )
          })
        }
      </AutoPlaySwipeableViews>
      <Pagination currentIndex={index} len={banners.length} />
    </div>
  )
})

Swiper.propTypes = {
  banners: propTypes.array
}
export default Swiper