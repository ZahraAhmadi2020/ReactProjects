import React, { useState } from 'react'

const Part6 = () => {


  const [formData, setFormData] = useState({
    email: "",
     pass: "", confirm_pass:'', isJoin:false
  })
  // const [lastName, setLastName] = useState()

  // const change = (e) => {
  //   e.preventDefault()
  //    setFirstName(e.target.value)
  // }

  //  const changeLName = (e) => {
  //   e.preventDefault()
  //    setLastName(e.target.value)
  // }


// console.log(formData);


  function change(e) {
    const{name,value,type,checked}=e.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        // [e.target.name]:e.target.value
        [name]:type==='checkbox' ? checked :value
     }
   })
  }

  function handleSubmit(e) {
    e.preventDefault()
    // submitToApi(formData)
    if (formData.pass === formData.confirm_pass) {
      console.log('seccess');
    } else {
      console.log('fail');
    }
    if (formData.join) {
      console.log('thanks for join');
     }
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder='Email' type='email' onChange={change} name='email' value={formData.email} />
      <input placeholder='Password' type='password' onChange={change} name='pass'value={formData.pass} />
      <input placeholder='Confirm-password' type='password' onChange={change} name='confirm_pass' value={formData.confirm_pass} />

      {/* <input className='checkbox' type='checkbox' id='isJoin' checked={formData.isJoin} onChange={change}
      name='isJoin'/>
      <label htmlFor='isJoin'>I want to join the newsletter.</label>
 */}


      <button type='btn'>Submit</button>
    </form>
  )
}

export default Part6
