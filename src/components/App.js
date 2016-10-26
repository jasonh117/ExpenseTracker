import React, { Component } from 'react';
import { createStore } from 'redux';
import ExpenseList from './ExpenseList'

// let store = createStore()

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      expenses: [
        {
          id: 0,
          service: "stuff",
          renewal: "123",
          cost: "456"
        },
        {
          id: 1,
          service: "stuff",
          renewal: "123",
          cost: "789"
        }
      ]
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleSubmit(data) {
    const expenses = this.state.expenses;
    expenses.push(data);
    this.setState({
      expenses: expenses
    });
  }

  handleDelete(id) {
    const expenses = this.state.expenses;
    const index = expenses.findIndex(expense => expense.id === id);
    expenses.splice(index, 1);
    this.setState({
      expenses: expenses
    });
  }

  render() {
    return (
      <div>
        <ExpenseList expenses={this.state.expenses} onSubmit={this.handleSubmit} onDelete={this.handleDelete}/>
      </div>
    );
  }
}

export default App;
