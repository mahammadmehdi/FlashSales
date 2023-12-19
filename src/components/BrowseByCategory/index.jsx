import React from 'react'
import "./index.scss"

function BrowseByCategory({image,text}) {
  return (
    <div className='categoryCards'><div className='categoryCard'>
    <div className='categoryCardIcon'>{image}</div>
    <div className='categoryCardName'>{text}</div>
</div></div>
  )
}

export default BrowseByCategory