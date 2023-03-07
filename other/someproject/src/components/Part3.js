import React, { useState } from 'react'

const Part3 = () => {
  const [thingsArray, setThingArray] = useState(['thing1', 'thing2'])

  const click = () => {
    setThingArray(prevState => {
      return [...prevState, `thing ${prevState.length + 1}`]
    }
    )
  }

  const thingElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
  return (

  <div className='part3'>
      <button onClick={click}>Add Item</button>
      {thingElements}

    </div>

  )
}

export default Part3
