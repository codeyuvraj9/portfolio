import React from 'react'
import res from './YuvrajRes.pdf';

export default function Resume() {
  return (
    <div>
        <iframe src={res} style={{width:"100%", height:"900px"}} title='resume'/>
    </div>
  )
}
