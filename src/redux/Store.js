import { combineReducers, createStore } from 'redux';

const numberReducer = function (state = {count: 0}, action) {
  switch (action.type) {
    case 'INCREMENT':
      return Object.assign({}, state, {count: state.count += 1});
      break;
    case 'DECREMENT':
      return Object.assign({}, state, {count: state.count -= 1});
      break;
    default:
      return Object.assign({}, state);
  }
};

const reducers = combineReducers(
  { numberReducer }
);

export default createStore(reducers);
