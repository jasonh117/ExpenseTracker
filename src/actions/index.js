import {
  ADD_EXPENSE,
  REMOVE_EXPENSE
} from './types'

export const addExpense = (expense) => ({
  type: ADD_EXPENSE,
  expense
})

export const removeExpense = (id) => ({
  type: REMOVE_EXPENSE,
  id
})
