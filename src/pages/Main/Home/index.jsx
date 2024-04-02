import React, { memo } from 'react'
import HeaderNav from '../../../components/HeaderNav'
import Swiper from '../../../components/Swiper'
import Banner1 from "../../../assets/images/banner1.png"
import Banner2 from "../../../assets/images/banner2.png"
import Banner3 from "../../../assets/images/banner3.png"
import HomeHotList from './HomeHotList'
import { useSelector } from 'react-redux'
const Home = memo(() => {
  const cityName = useSelector(state => state.CityInfo.cityName)
  return (
    <div>
      <HeaderNav cityName={cityName} />
      <Swiper banners={[Banner1, Banner2, Banner3]} />
      <HomeHotList cityName={cityName} />
    </div>
  )
})
export default Home