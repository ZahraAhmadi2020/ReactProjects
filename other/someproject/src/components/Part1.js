import React, { useState } from 'react'


const Part1 = () => {

  const [count, setCount] = useState(0)

  function more() {
    setCount(prevCount=>prevCount + 1)
  }

  function less() {
    setCount(prevCount=>prevCount - 1)
  }


  return (

      <div className='part1'>
      <button className='button1' onClick={more}>+</button>
      <div className='count'>
        <h1>{count}</h1>
      </div>
      <button className='button2' onClick={less}>-</button>
    </div>

  )
}

export default Part1
