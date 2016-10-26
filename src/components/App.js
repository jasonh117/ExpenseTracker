import React, { Component } from 'react';
import ExpenseList from './ExpenseList'
import { addExpense, removeExpense } from '../actions'
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div>
        <ExpenseList expenses={this.props.expenses} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.expenses
})

export default connect(mapStateToProps)(App);
