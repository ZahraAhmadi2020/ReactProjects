import React from 'react'
import { useState, useCallback } from 'react'





function UseCallbackExample() {
  const [tasks, setTasks] = useState([])
  
  const addTask =useCallback(() => {
    setTasks((prevState)=>[...prevState,'Some Tasks'])
  },[setTasks]) 


   
  return (
    <div>
      <Button addTask={addTask} />
      {tasks.map((task,index) => (
        <p key={index}>{task}</p>
      ))}
    </div>
  )
}

const Button = ({ addTask}) => {
  console.log('Button rendered')

  return <div>
    <button className='btn btn-primary' onClick={addTask}>add Task</button>
  </div>
}

export default UseCallbackExample