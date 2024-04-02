import React, { memo, useEffect, useState } from 'react'
import './style.less'
import { useParams, withRouter } from 'react-router-dom'
// 使用redux传参
import { useDispatch, useSelector } from 'react-redux'
import * as searchAction from '../../store/Search'
const SearchInput = memo((props) => {
  const [keywords, setKeywords] = useState("");
  const dispatch = useDispatch()
  const params = useParams();
  const { search } = useSelector((state) => ({
    search: state.Search.search
  }))
  // const reduxSearch = useSelector(state => state.search)

  useEffect(() => {
    console.log(params.keywords, 'params.keywords');
    console.log('这里是我从redux拿到的', search);
    // 在这里拿到值 回退的时候 需要将上一次的搜索值进行赋值
    if (params.keywords) {
      dispatch(searchAction.updateSearch(keywords))
    } else {
      dispatch(searchAction.updateSearch(''))
    }
    setKeywords(search)
  }, [search, params.keywords])

  function keyUpHandleClick(e) {
    if (keywords.length > 0) {
      if (e.keyCode === 13) {
        props.history.push('/search/' + keywords)
        dispatch(searchAction.updateSearch(keywords))
      }
    }
  }

  function changeHandle(e) {
    setKeywords(e.target.value)
  }
  return (
    <input className='search-input' type='text'
      onKeyUp={keyUpHandleClick}
      value={keywords}
      onChange={changeHandle} />
  )
})

export default withRouter(SearchInput)