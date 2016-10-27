import React, { PropTypes } from 'react'
import Expense from './Expense'
import AddExpense from './AddExpense'

const styles = {
  container: {
    // border: '1px solid blue',
    display: 'flex',
    flexFlow: 'row wrap',
    padding: '2px'
  }
}

const ExpenseList = ({ expenses }) => (
  <div style={styles.container}>
    {expenses.map(data => {
      return <Expense key={data.id} expense={data} />
    })}
    <AddExpense />
  </div>
)

ExpenseList.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    service: PropTypes.string.isRequired,
    renewal: PropTypes.string.isRequired,
    cost: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default ExpenseList
