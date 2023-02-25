import React from 'react'
import { useEffect, useState, useRef } from 'react'



//......
function UseRefExample2() {

  const renders = useRef(1)
  const prevName=useRef('')
  const [name, setName] = useState()
  
  useEffect(() => {
    renders.current = renders.current + 1
    prevName.current=name
  }, [name])
  


  return (
    <div>
      <h1>Renders:{renders.current}</h1>
      <h2>{prevName.current}</h2>
      <input className='form-control mb-3 mt-5 ml-6' type="text" value={name} onChange={(e)=>setName(e.target.value)} />
    </div>
  )
}

export default UseRefExample2