import React, { memo } from 'react'

const Layout = memo((props) => {
  return (
    <div>{props.children}</div>
  )
})

export default Layout