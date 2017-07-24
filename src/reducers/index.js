import { combineReducers } from 'redux';
import todo_reducer from './todo_reducer';

export default combineReducers({
  todo: todo_reducer
});
