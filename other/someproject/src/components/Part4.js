import React, { useState }  from 'react'
import { AiOutlineStar ,AiFillStar} from 'react-icons/ai';
import person from '../assets/person.png'

const Part4 = () => {
  const [contact, setContact] = useState({
    firstName: "Mary",
    last: "Delray",
    phone: '+98(9123456789)',
    email: 'mary2020@email.com',
    isFavorite:false
  } )
let star=contact.isFavorite ? <AiFillStar/> : <AiOutlineStar/>

  const toggle = () => {
    setContact(prevContact => {
      return {
       ...prevContact,
        isFavorite: !prevContact.isFavorite,


      }
    })
  }


  return (

       <div className='part4'>
      <div className='img'>
        <img  src={person} alt='person'/>
      </div>
      <div className='content'>

        <p className='icon' onClick={toggle}>{star}</p>
        <h2>{contact.firstName} {contact.last}</h2>
        <p>{contact.phone}</p>
        <p>{contact.email}</p>
      </div>
    </div>

  )
}

export default Part4
