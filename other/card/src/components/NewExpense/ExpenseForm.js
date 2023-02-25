import React ,{useState} from 'react'
import './ExpenseForm.css'


//...........
const ExpenseForm = (props) => {


  const [enterTitle, setEnterTitle] = useState('')
  const [enterAmount, setEnterAmount] = useState('')
  const [enterDate, setEnterDate] = useState('')

  // const [userInput, setUserInput] = useState({
  //   enterTitle: '',
  //   enterAmount: '',
  //   enterDate:''
  // })
  

  const changeTitle = (e) => {
    // setUserInput({
    //   ...userInput,
    //   enterTitle:e.target.value
    // })
    setEnterTitle(e.target.value)
  }

  
  const changeAmount = (e) => {
    //  setUserInput({
    //   ...userInput,
    //   enterAmount:e.target.value
    // })
    setEnterAmount(e.target.value)
  }


  
  const changeDate = (e) => {
    //  setUserInput({
    //   ...userInput,
    //   enterDate:e.target.value
    // })
    setEnterDate(e.target.value)
  }


  const onSubmit = (e) => {
    e.preventDefault();

    const expenseData = {
      title: enterTitle,
      amount: enterAmount,
      date:new Date(enterDate)
    }
    props.onSavaExpenseData(expenseData);
    setEnterTitle('')
    setEnterAmount('')
    setEnterDate('')
  }


  return (
    <form onSubmit={onSubmit}> 
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <lable>Title</lable>
          <input type='text' value={enterTitle} onChange={changeTitle}/>
        </div>
        <div className='new-expense__control'>
          <lable>Amount</lable>
          <input type='number' min='0.01' step='0.01' value={enterAmount} onChange={changeAmount}/>
        </div>
        <div className='new-expense__control'>
          <lable>Date</lable>
          <input type='date' min='2019-9-8' max='2022-3-5'value={enterDate} onChange={changeDate}/>
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm