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
      return <Expense {...data} />
    })}
    <AddExpense />
  </div>
)

ExpenseList.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape({
    service: PropTypes.string.isRequired,
    renewal: PropTypes.string.isRequired,
    cost: PropTypes.string.isRequired
  }).isRequired).isRequired
  // onTodoClick: PropTypes.func.isRequired
}

export default ExpenseList
