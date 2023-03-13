import React from 'react'
 import { Switch } from '@mui/material'


const Nav = (props) => {



  return (
    <nav>
      <div className='icon'>
        <h3>Light mode</h3>

        <Switch
           checked={props.check}
           onChange={props.change}
          inputProps={{ 'aria-label': 'controlled' }}


       />


        <h3>Dark mode</h3>
      </div>

    </nav>
  )
}

export default Nav
