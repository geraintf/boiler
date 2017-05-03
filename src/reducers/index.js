import counter from './counter';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const reducers = combineReducers({
  counter,
  routing: routerReducer
});

export default reducers;