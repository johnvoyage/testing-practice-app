import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1} = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({ decrementBy = 1} = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const setCount = ({ count } = {}) => ({
  type: 'SET',
  count
})

const resetCount = () => ({
  type: 'RESET',
})

// Reducers

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy,

      };
    case 'DECREMENT':
      const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1
      return {
        count: state.count - action.decrementBy,
      };
    case 'RESET':
      return {
        count: 0,
      };
    case 'SET':
      return {
        count: action.count,
      };
    default:
      return state;
  };
};

const initialState = { count: 0 };

const store = createStore(countReducer);


const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
})

// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5,
// });

store.dispatch(incrementCount({ incrementBy: 5 }))

// unsubscribe();

// store.dispatch({
//   type: 'INCREMENTT'
// });

store.dispatch(incrementCount())


store.dispatch(decrementCount({ decrementBy: 10}));


// store.dispatch({
//   type: 'RESET'
// })
store.dispatch(resetCount());

store.dispatch(decrementCount());

// store.dispatch({
//   type: 'SET',
//   count: 1010
// })
store.dispatch(setCount({ count: 100 }))