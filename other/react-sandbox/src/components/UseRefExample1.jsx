import React from 'react'
import { useRef } from 'react';


//.....
function UseRefExample1() {
  const inputRef = useRef()
  
  const onSubmit = (e) => {
    e.preventDefault()
    console.log(inputRef.current.value)
    inputRef.current.value = 'welcome'
    inputRef.current.style.width = '300px'
    inputRef.current.style.height='50px'
  }
  return (
    <div> 
      <form className='ml-9  mt-9' onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" ref={inputRef} id='name' className='input-disabled form-control mb-2 mt-3 w-180' />
        <button type='submit' onClick={()=>inputRef.current.focus()} className='btn btn-primary mt-2'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default UseRefExample1