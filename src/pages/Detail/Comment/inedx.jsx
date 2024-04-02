import React, { useEffect, useState } from 'react'
import CommentView from '../CommentView'
import api from '../../../api'
import LoadMore from '../../../components/LoadMore'
const Comment = ((props) => {

  const [comment, setComment] = useState([])
  const [hasMore, setHasMore] = useState(false)
  useEffect(() => {
    getCommentDetai()
  }, [])
  const loadMoreHandle = () => {
    getCommentDetai()

  }

  const getCommentDetai = () => {
    api.comment({ id: props.id }).then((res) => {
      switch (res.data.status) {
        case 200:
          setComment(comment.concat(res.data.result.data))
          setHasMore(res.data.result.hasMore)
          break;
      }
    }).catch((err) => {
      console.log('error:', err);
    })
  }
  return (
    <div>
      {
        comment.length > 0 ? <CommentView data={comment} /> : <div>等待数据加载</div>
      }
      {
        hasMore ? <LoadMore onLoadMore={loadMoreHandle} /> : <div>没有数据了</div>
      }

    </div>
  )
})

export default Comment