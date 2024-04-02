import React, { memo } from 'react'
import CityHeader from '../../components/PubHeader'
import CityList from './CityLIst'
import CurrentCity from './CurrentCity'
import { changeCity } from '../../store/City'
import { useDispatch, useSelector } from 'react-redux'
import MoreCityList from './MoreCityLIst'

const City = memo((props) => {
  // const [city, setCity] = useState('西安');
  // 获取
  const city = useSelector(state => state.CityInfo.cityName);
  const dispatch = useDispatch();
  function onCityEvent(city) {
    dispatch(changeCity(city))
    props.history.push("/")
  }
  return (
    <div>
      <CityHeader title={"城市选择"} />
      <CurrentCity city={city} />
      <CityList onCityEvent={onCityEvent} />
      <MoreCityList onEvent={onCityEvent} />
    </div>
  )
})
/**
 *  子传父  在父组件中 给子组件CityList添加自定义事件 onCityEvent 
 *  然后在子组件CityList中 通过props接受 并在 某个OnClick中 
 *  通过 props.onCityEvent(city);传递参数给父组件
 * ----------------------------------
 * 父组件 将值city传给子组件CurrentCity 通过props接受并解构即可
 * 
 */

export default City