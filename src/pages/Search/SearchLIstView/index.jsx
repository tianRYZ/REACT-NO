import React, { memo } from 'react'
import SearchItem from './Item';

const SearchListView = memo((props) => {
  const { search } = props;
  return (
    <div>
      {
        search.map((item, index) => {
          return (
            <SearchItem data={item} key={index} />
          )
        })
      }
    </div>
  )
})

export default SearchListView