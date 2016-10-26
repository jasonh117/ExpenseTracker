import {
  ADD_EXPENSE,
  REMOVE_EXPENSE
} from '../actions/types'

const initialState = [
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

const expenses = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EXPENSE:
      return [
        ...state,
        action.expense
      ];
    case REMOVE_EXPENSE:
      const expenses = state.slice();
      const index = expenses.findIndex(expense => expense.id === action.id);
      expenses.splice(index, 1);
      return expenses;
    default:
      return state;
  }
}

export default expenses
