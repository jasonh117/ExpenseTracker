import React, { PropTypes, Component } from 'react'
import { addExpense } from '../actions'
import { connect } from 'react-redux';

const styles = {
  container: {
    background: '#74AFAD',
    width: '300px',
    height: '300px',
    margin: '2px',
    textAlign: 'center',
    position: 'relative'
  },
  text: {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  input: {
    display: 'block',
    margin: '15px auto',
    padding: '10px',
    border: 'solid 1px #dcdcdc',
    outline: 'none',
    background: 'white'
  }
}

class AddExpense extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: 2,
      service: "",
      renewal: "",
      cost: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.onKeyPress = this.onKeyPress.bind(this)
  }

  handleSubmit() {
    if(this.state.service.trim() === "") return
    if(this.state.renewal.trim() === "") return
    if(this.state.cost.trim() === "") return

    this.props.dispatch(addExpense(this.state))
    this.setState({
      id: this.state.id+1,
      service: "",
      renewal: "",
      cost: ""
    })
  }

  handleInput(name, e) {
    var change = {}
    change[name]= e.target.value
    this.setState(change)
  }

  onKeyPress(e) {
    if(e.key === 'Enter') {
      this.handleSubmit();
    }
  }

  render() {
    return (<div style={styles.container}>
      <h1>Add Expense</h1>
      <input type="text" style={styles.input} value={this.state.service} onKeyPress={this.onKeyPress} onChange={this.handleInput.bind(this, 'service')}></input>
      <input type="text" style={styles.input} value={this.state.renewal} onKeyPress={this.onKeyPress} onChange={this.handleInput.bind(this, 'renewal')}></input>
      <input type="text" style={styles.input} value={this.state.cost} onKeyPress={this.onKeyPress} onChange={this.handleInput.bind(this, 'cost')}></input>
      <button style={styles.input} onClick={this.handleSubmit}>Add</button>
    </div>)
  }
}

export default connect()(AddExpense)
