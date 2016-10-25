import React, { PropTypes } from 'react'

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

// const deleteExpense() {
//   this.props.onDelete(this.props.id)
// }

const Expense = ({ service, renewal, cost, id, onDelete }) => (
  <div style={styles.container}>
    <h1>{service}</h1>
    <p>{renewal}</p>
    <p>{cost}</p>
    <button onClick={() => {onDelete(id)}}>Delete</button>
  </div>
)

Expense.propTypes = {
  service: PropTypes.string.isRequired,
  renewal: PropTypes.string.isRequired,
  cost: PropTypes.string.isRequired
}

export default Expense
