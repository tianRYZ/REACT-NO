import PropTypes from 'prop-types'
import React, { memo, useEffect, useState } from 'react'
import api from '../../../api'
import DetailHeader from '../../../components/PubHeader'
import Swiper from '../../../components/Swiper'
import BuyAndStore from './BuyAndStore'
import Tabs from '../../../components/Tabs'
import Comment from '../Comment/inedx'
import './style.less'
const DetailView = memo((props) => {
  const [detailData, setDetailData] = useState({})
  useEffect(() => {
    api.details({ id: props.id }).then((res) => {
      if (res.status === 200) {
        setDetailData(res.data);
      }
    })
  }, [])
  return (
    <div>
      <DetailHeader title={'详情页'} />
      {
        detailData.imgs ? <Swiper banners={detailData?.imgs} /> : <div>等待数据加载</div>
      }
      <Tabs>
        <div label="详情">
          <div className=' mb-[50px] text-center'>
            <h3 className=' text-[17px] h-[50px] leading-[50px] block text-[#000] opacity-80'>{detailData.title}</h3>
            <div className=' shadow-md rounded-lg'>
              <ul className='py-[10px] flex justify-between mx-2'>
                <li className=''>
                  <span className=' text-[17px]  text-[#ff5555]'>{detailData.price} /月</span>
                  <p>租金</p>
                </li>
                <li>
                  <span className=' text-[17px]  text-[#ff5555]'>{detailData.info?.type}</span>
                  <p>房屋类型</p>
                </li>
                <li>
                  <span className=' text-[17px]  text-[#ff5555]'>{detailData.houseType}</span>
                  <p>面积</p>
                </li>
              </ul>
            </div>
            <div className='m-5'>
              <div className='flex text-[15px]'>
                <p className=''>类型：{detailData.info?.type}</p>
                <p className="flex-1">朝向：{detailData.info?.orientation}</p>
              </div>
              <div className='flex text-[15px]'>
                <p>楼层：{detailData.info?.level}</p>
                <p className="flex-1">装修：{detailData.info?.style}</p>
              </div>
              <div className='flex text-[15px]'>
                <p>年代：{detailData.info?.years}</p>
              </div>
            </div>
          </div>
          <BuyAndStore id={props.id} />
        </div>
        <div label="评价" >
          <Comment id={props.id} />
        </div>
      </Tabs>
    </div>
  )
})

DetailView.propTypes = {
  id: PropTypes.string
}

export default DetailView