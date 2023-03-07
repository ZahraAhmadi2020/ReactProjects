import React, { useState } from 'react'


const Part2 = () => {
  const [isGoingOut, setIsGoingOut] = useState(true)


  const click = () => {
    setIsGoingOut(prevState=>!prevState )
  }

  return (

      <div className='part2'>
      <h2>Do i feel like going out tonight?</h2>
      <div className='answer' onClick={click}>
        <h1>{isGoingOut ? 'Yes' : 'No'}</h1>
      </div>
    </div>

  )
}

export default Part2
