import React, { memo, useEffect, useState } from 'react'
import api from '../../../api'
import LoadMore from '../../../components/LoadMore';
import SearchListView from '../SearchLIstView'
const SearchList = memo((props) => {
  // const { search } = props;
  const [searchData, setSearchData] = useState([]);
  // 定义加载更多
  const [hasMore, setHasMore] = useState(false);
  useEffect(() => {
    http();
    return () => {
      setSearchData([]);
      setHasMore(false)
    }
  }, [props.search])

  function LoadMoreHandle() {
    // 需要加载更多 
    http();
  }
  // const http = () => {
  //   api.search({ search: props.search }).then(res => {
  //     if (res.data.status === 200) {
  //       setSearchData(searchData.concat(res.data.result.data))
  //       setHasMore(res.data.result.hasMore);
  //     }
  //   }).catch(error => {
  //     console.log(error);
  //   })
  // }

  const http = async () => {
    try {
      let data = {
        search: String(props.search)
      }
      const res = await api.search(data);
      if (res.status === 200) {
        setSearchData(searchData.concat(res.data.result.data))
        setHasMore(res.data.result.hasMore);
        console.log('加载更多');
      }
    } catch (error) {
      console.log(error, '获取列表出错了');
    }
  }
  // // const http = useCallback(() => {
  //   console.log(props.search);
  //   api.search({
  //     search: props.search
  //   }).then(res => {
  //     if (res.data.status === 200) {
  //       //合并数据 
  //       setSearchData(searchData.concat(res.data.result.data));
  //       setHasMore(res.data.result.hasMore);
  //     }
  //   }).catch(error => {
  //     console.log(error);
  //   })
  // }, [searchData, props.search])
  return (
    <div>
      {searchData.length > 0 ?
        <SearchListView search={searchData} />
        : <div>等待数据加载...</div>}
      {
        hasMore ?
          <LoadMore onLoadMore={LoadMoreHandle} /> : <div>没有了</div>
      }
      {/* 父组件使用接受函数事件 并将值赋给子组件 */}
    </div>
  )
})

export default SearchList