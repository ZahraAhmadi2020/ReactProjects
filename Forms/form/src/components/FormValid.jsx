import React from 'react'
import { useState } from 'react'
import Validation from './Validation'
import { FaEye } from 'react-icons/fa'

//.......
function FormValid() {

  


  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    confirm_password: ''
 
    
  })
  //show pass
  
   const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = (e) => {
    e.preventDefault()
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  } 

//......
  const handleInput = (e) => {
    
    
    setValues({...values,[e.target.name]:[e.target.value]})
}

  const [errors, setErrors] = useState({})
  
  function handleSubmit(e) {
    e.preventDefault()
    setErrors(Validation(values))
  }
  const click = (e) => {
   
    // console.log(e.target.value);
}

  return (
    <section>
      <div>
        <div>
          <h2 className="mt-5 text-center text-secondary">Sign Up</h2>
          

          <form id='form'className="bg-dark shadow-lg lead" onSubmit={handleSubmit}>
            <input name='username' onChange={handleInput} type='text'
              placeholder='username'className="border-3 mb-2 p-2 w-100" />
             {errors.username && <p className='text-danger'>{errors.username}</p>}
            <input name='email' onChange={handleInput} type='email'
              placeholder='email' className="border-3 mb-2 p-2 w-100" />
            {errors.email && <p className='text-danger'>{errors.email}</p>}

            <div className='d-flex'>
              <input name='password' onChange={handleInput} 
                placeholder='password' className="border-3 mb-2 p-2 w-100"
                type={passwordShown ? "text" : "password"} />
              <FaEye className='text-black' id='eye' onClick={togglePassword} />
               
            
            </div>
            {errors.password && <p className='text-danger'>{errors.password}</p>}
             
             
            <div className='d-flex'>
              <input name='confirm_password' onChange={handleInput} 
                type={passwordShown ? "text" : "password"}
              placeholder='confirm password' className="border-3 mb-2 p-2 w-100" />
            {/* <FaEyeSlash className='text-black' id='eye' onClick={togglePassword} /> */}
            </div>

            {errors.confirm_password && <p className='text-danger'>{errors.confirm_password}</p>}
            
            <button type='submit' onClick={click}
              className='btn btn-info border-primary btn btn-info mt-5 p-2 w-100'>Sign Up</button>
          </form>
        </div>
         
      </div>
    </section>
  )
}

export default FormValid