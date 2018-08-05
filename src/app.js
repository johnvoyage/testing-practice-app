import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter.js';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css'
import './styles/styles.scss';

import { addExpense } from './actions/expenses.js';
import { setTextFilter } from './actions/filters.js';
import getVisibleExpenses from './selectors/expenses.js';


const store = configureStore();

// addExpense 
store.dispatch(addExpense({ description: 'gas bill', amount: 300, createdAt: -1000 }));
store.dispatch(addExpense({ description: 'water BIll', amount: 100, createdAt: 1000 }));
store.dispatch(addExpense({ description: 'rent', amount: 1095, createdAt: 500 }));
// setTextFilter 
// store.dispatch(setTextFilter('bill'))
// getVisibleExpenses
// console.log(getVisibleExpenses(store.getState().expenses, store.getState().filters));
// setTextFilter
// store.dispatch(setTextFilter('water'))
// getVisibleExpenses
// console.log(getVisibleExpenses(store.getState().expenses, store.getState().filters));



// console.log(store.getState());

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));
