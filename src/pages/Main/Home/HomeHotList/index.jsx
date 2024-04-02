import React, { memo, useEffect, useState } from 'react'
import api from '../../../../api'
import HomeHotView from '../HomeHotView';
import { isEmptyObj } from '../../../../utils/isEmptyObj';
const HomeHotList = memo((props) => {
  const { cityName } = props;
  const [hot1list, setHot1List] = useState([]);
  const [hot2list, setHot2List] = useState([]);
  const [citys, setCity] = useState(cityName);
  useEffect(() => {
    api.getHomeHot1({ cityName }).then(res => {
      if (res.data.status === 200) {
        setHot1List(res.data.result);
        setCity(res.data.city)
      }
    })
  }, [cityName])

  useEffect(() => {
    api.getHomeHot2({ cityName }).then(res => {
      if (res.data.status === 200) {
        setHot2List(res.data.result);
        setCity(res.data.city)
      }
    })
  }, [cityName])
  return (
    <div>
      {isEmptyObj(hot1list) && <HomeHotView citys={citys} hot1list={hot1list} title={'热门商品'} />}
      {isEmptyObj(hot2list) && <HomeHotView citys={citys} hot1list={hot2list} title={'新品推荐'} />}
    </div>
  )
})

export default HomeHotList