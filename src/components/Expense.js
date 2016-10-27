import React, { PropTypes } from 'react'
import { removeExpense } from '../actions'
import { connect } from 'react-redux';

const styles = {
  container: {
    background: '#74AFAD',
    width: '300px',
    height: '300px',
    margin: '2px',
    textAlign: 'center',
    position: 'relative'
  }
}

const Expense = ({ expense, dispatch }) => (
  <div style={styles.container}>
    <h1>{expense.service}</h1>
    <p>{expense.renewal}</p>
    <p>{expense.cost}</p>
    <button onClick={() => dispatch(removeExpense(expense.id))}>Delete</button>
  </div>
)

Expense.propTypes = {
  expense: PropTypes.shape({
    id: PropTypes.number.isRequired,
    service: PropTypes.string.isRequired,
    renewal: PropTypes.string.isRequired,
    cost: PropTypes.string.isRequired
  }).isRequired
}

export default connect()(Expense)
