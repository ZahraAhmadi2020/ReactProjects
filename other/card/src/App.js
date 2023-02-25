 import React,{useState} from 'react'
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'



const DUMMY_EXPENSES = [
    {
    id: 'el1',
    title: 'toilet paper',
    amount: 94,
    date:new Date(2022,4,6)
  },
  {
    id: 'el2',
    title: 'hotel',
    amount: 9404,
    date:new Date(2020,1,24)
    },
  {
    id: 'el3',
    title: 'machine',
    amount: 994,
    date:new Date(2021,8,16)
    },
  {
    id: 'el4',
    title: 'food',
    amount: 4594,
    date:new Date(2022,12,26)
    }
  ]

//.........
const App = () => {
  const[expenses,setExpenses]=useState(DUMMY_EXPENSES);

  

  const addExpense = (expense )=> {
    // console.log('In App.js')
    // console.log(expenses);

    setExpenses((prevExpenses) => {
      return [expense,...prevExpenses]
    }) 
  }
   return (
     <div>
       <NewExpense onAddExpense={addExpense} />
       <Expenses items={expenses} />
       
    </div>
   )
 }
 
 export default App