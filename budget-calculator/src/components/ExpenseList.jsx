function ExpenseList({ expenses }) {
  if (expenses.length === 0) {
    return <p>Nenhuma despesa registrada.</p>
  }

  return (
    <ul className="expense-list">
      {expenses.map((exp) => (
        <li key={exp.id}>
          <span>{exp.description}</span>
          <span>{new Date(exp.date).toLocaleDateString('pt-BR', { timeZone: 'UTC' })}</span>
          <span>R$ {exp.amount.toFixed(2)}</span>
        </li>
      ))}
    </ul>
  )
}

export default ExpenseList
