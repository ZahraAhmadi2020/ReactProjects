import React,{useEffect, useState} from 'react'

const Window = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

   useEffect(() => {
    // console.log('run');
   function watchWidth(){
       console.log('resized')
       setWindowWidth(window.innerWidth)
     }
     window.addEventListener('resize', watchWidth)
     return function(){
       window.removeEventListener('resize', watchWidth)
     }
  },[])
  return (
    <div>
      <h2>Window width:{windowWidth }</h2>
    </div>
  )
}

export default Window
