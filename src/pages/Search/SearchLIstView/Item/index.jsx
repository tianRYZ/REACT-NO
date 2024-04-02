import React, { memo, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './style.less'
// import { loadingImageAsync } from '../../../../utils/loadingIcon.js'
import { loadingImageAsync } from '../../../../utils/loadingIcon.js'
import DefaultIcon from '../../../../assets/defa.png'
const SearchItem = memo((props) => {
  const { data } = props;
  const [showImg, setShowImg] = useState(DefaultIcon);
  loadingImageAsync(data.img).then(res => {
    setShowImg(res)
  }).catch((err) => {
    console.log(err, 'error');
  })

  // useEffect(() => {
  //   loadingImageAsync(data.img).then((res) => {
  //     setshowFlag(res);
  //   })
  // }, [data])
  // const [isFirstIcon, setFirstIcon] = useState(false);
  // console.log(data, '-data', isFirstIcon);
  return (
    <div className='list-item'>
      <Link to={`/details/${data.id}`}>
        <img src={showImg} alt='' />
        <div className='mask'>
          <div className='left'>
            <p>{data.title}</p>
            <p>{data.houseType}</p>
          </div>
          <div className='right'>
            <div className='btn'>
              {data.rentType}
            </div>
            <p dangerouslySetInnerHTML={{ __html: data.price + '元/月' }}></p>
          </div>
        </div>

      </Link>
    </div>
  )
})

SearchItem.propTypes = {
  data: PropTypes.object
}
export default SearchItem