import React, { memo } from 'react'
import { useParams } from 'react-router-dom'
import DetailView from './DetailView';
const Detail = memo(() => {

  const params = useParams();
  console.log(params, '=-==params');
  return (
    <div>
      <DetailView id={params.id} />
    </div>
  )
})

export default Detail