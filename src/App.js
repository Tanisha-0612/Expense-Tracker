import react , { useState}  from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id : 'e1',
    title : 'Car Insurance',
    amount : '21000',
    date : new Date(2020,9,26)
  },
  {
    id : 'e2',
    title : 'Grocery',
    amount : '3000',
    date : new Date(2019,8,25)
  },
  {
    id : 'e3',
    title : 'Skincare',
    amount : '5000',
    date : new Date(2023,7,17)
  },
  {
    id : 'e4',
    title : 'Yoga Class',
    amount : '1000',
    date : new Date(2023,9,1)
  },
]

const App = () => {
  const [expenses,setExpenses] = useState(DUMMY_EXPENSES);
  
  const addExpenseHandler = (expense) =>{
    setExpenses((prevExpenses)=>{
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
