import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses.js';
import moment from 'moment';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' })
  expect(state).toEqual([])
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]])
});

test('should not remove expense if id not found', () => {
  const nonexistentId = '-1'
  const action = {
    type: 'REMOVE_EXPENSE',
    id: nonexistentId
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  const expense = {
    id: '125',
    amount: 2451,
    description: 'et  23twfas',
    note: 'asfsbi3t',
    createdAt: 51521
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense,
  };
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([...expenses, expense])
});

test('should edit an expense', () => {
  const amount = 21515;
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      amount
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state[1].amount).toBe(amount);
});

test('should not edit expense if expense not found', () => {
  const updates = {
    id: '-1241',
    description: '5512rfa',
    amount: 5032152,
    note: 'afsfsdgaw3',
    createdAt: moment(0)
  };
  const action = {
    type: 'EDIT_EXPENSE',
    updates
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses)
});
