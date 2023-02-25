import React, { useState } from 'react'
import ToDo from './ToDo'
function UseRefExample3() {
  const [showTodo,setShowTodo]=useState(true)
  return (
    <div>{showTodo && <ToDo />}
      <button className= 'btn btn-primary' onClick={()=>setShowTodo(!showTodo)}>click</button>
    </div>
  )
}

export default UseRefExample3