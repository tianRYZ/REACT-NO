import React, { memo } from 'react'
import Item from './Item'

const CommentView = memo((props) => {
  console.log(props, '--props');
  const data = props.data;
  return (
    <div className=' p-[20px]'>
      <ul>
        {
          data.map((ele, index) => {
            return <Item key={index} data={ele} />
          })
        }
      </ul>
    </div>
  )
})

export default CommentView