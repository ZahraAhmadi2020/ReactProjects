import React, { useState } from 'react'
import Window from './Window'

const Part1 = () => {
  const [show, setShow] = useState(false);


  return (
    <div className='part1'>
      <button onClick={()=>(setShow(prevShow=>!prevShow))}>Toggle WindowTracker</button>
      {show && <Window/>}
    </div>
  )
}

export default Part1
