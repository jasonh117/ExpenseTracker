import React from 'react';
import ExpenseList from './ExpenseList'
import { connect } from 'react-redux';

const App = ({ expenses }) => (
  <div>
    <ExpenseList expenses={expenses} />
  </div>
)

const mapStateToProps = state => ({
  expenses: state.expenses
})

export default connect(mapStateToProps)(App);
