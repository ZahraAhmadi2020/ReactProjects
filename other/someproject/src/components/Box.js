import React from 'react'

const Box = (props) => {

  // const [on, setOn] = useState(props.on)

  // const toggle = () => {
  //   setOn(prevOn=>!prevOn)
  // }
  const style = {
    // backgroundColor:props.darkMode ? '#222222' : '#cccccc'
    backgroundColor:props.on ? '#222222' : 'white'
  }
  return (
     <div className='box' style={style} onClick={()=> props.toggle(props.id)} ></div>
  )
}

export default Box
