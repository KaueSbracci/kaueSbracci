function MonthlySummary({ expenses }) {
  const totals = expenses.reduce((acc, exp) => {
    const month = exp.date.slice(0, 7) // YYYY-MM
    acc[month] = (acc[month] || 0) + exp.amount
    return acc
  }, {})

  const months = Object.entries(totals)
  if (months.length === 0) {
    return null
  }

  return (
    <div className="monthly-summary">
      <h2>Resumo Mensal</h2>
      <ul>
        {months.map(([month, total]) => (
          <li key={month}>
            {new Date(month + '-01').toLocaleDateString('pt-BR', {
              month: 'long',
              year: 'numeric',
            })}: R$ {total.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MonthlySummary
