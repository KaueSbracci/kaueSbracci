import { useState } from 'react'
import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'
import MonthlySummary from './components/MonthlySummary'
import './App.css'

function App() {
  const [expenses, setExpenses] = useState([])

  const handleAddExpense = (expense) => {
    setExpenses((prev) => [
      ...prev,
      { ...expense, id: crypto.randomUUID() },
    ])
  }

  return (
    <div className="app">
      <h1>Calculadora de Orçamento Pessoal</h1>
      <ExpenseForm onAdd={handleAddExpense} />
      <ExpenseList expenses={expenses} />
      <MonthlySummary expenses={expenses} />
    </div>
  )
}

export default App
