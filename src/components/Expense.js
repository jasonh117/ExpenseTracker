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

const Expense = ({ service, renewal, cost, id, dispatch }) => (
  <div style={styles.container}>
    <h1>{service}</h1>
    <p>{renewal}</p>
    <p>{cost}</p>
    <button onClick={() => dispatch(removeExpense(id))}>Delete</button>
  </div>
)

Expense.propTypes = {
  service: PropTypes.string.isRequired,
  renewal: PropTypes.string.isRequired,
  cost: PropTypes.string.isRequired
}

export default connect()(Expense)
