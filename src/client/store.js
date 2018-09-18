import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import FilesReducer from './modules/files';

const reducers = combineReducers({
  files: FilesReducer,
});

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk),
);
