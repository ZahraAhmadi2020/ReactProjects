


function Validation(values) {

  let error = {}
  
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  
  const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/
  

  if (values.username === '') {
    error.username='username doesnt match'
  }


   if(values.email === '') {
    error.email='invalid'
  }

  else if (!email_pattern.test(values.email)) {
    error.email='invalid email'
   }
  
  

  if (values.password === '') {
    error.password='invalid'
  }

  else if (!password_pattern.test(values.password)) {
    error.password='invalid password'
  }


  if (values.confirm_password===''|| String(values.confirm_password) !== String(values.password)) {
    console.log(values.confirm_password+"___"+values.password);
     error.confirm_password='invalid confirm'
   }

  
  
  return error;
}



export default Validation