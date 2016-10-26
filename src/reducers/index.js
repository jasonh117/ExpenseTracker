import { combineReducers } from 'redux'
import expenses from './expenses'

const todoApp = combineReducers({
  expenses
})

export default todoApp
