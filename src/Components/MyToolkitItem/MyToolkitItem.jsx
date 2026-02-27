import React from 'react'
import "./MyToolkitItem.css"
export default function MyToolkitItem({tool,color}) {
  return (
    <div className={`toolkit-item flex items-center justify-center px-10 py-3 rounded-full ${color} `}>
      <p className='text-2xl' >{tool}</p>
    </div>
  )
}
