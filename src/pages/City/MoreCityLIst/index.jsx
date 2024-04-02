import React, { memo, useEffect, useState } from 'react'
import CitySelect from 'react-city-select'
import MoreCityLIst from '../../../data/city.js'
import api from '../../../api'
import './style.less'
const MoreCityList = memo((props) => {
  const [cityData, setCityData] = useState(MoreCityLIst);
  function handleSelectCity(cityData) {
    props.onEvent(cityData.name)
  }
  useEffect(() => {
    api.getCityList().then(res => {
      if (res.status === 200) {
        setCityData(res.data.result.citylist)
      }
    })
  }, []);
  return (
    <div className='moreCity'>
      <h3>城市列表</h3>
      <CitySelect
        data={cityData}
        onSelectItem={handleSelectCity}></CitySelect>
    </div>

  )
})

export default MoreCityList