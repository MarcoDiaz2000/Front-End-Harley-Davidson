import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import motorcyclesReducer from './motorcycles/motorcycles';
import reservationsReducer from './reservations/reservations';
import usersReducer from './users/users';

const rootReducer = combineReducers({
  motorcycles: motorcyclesReducer,
  reservations: reservationsReducer,
  users: usersReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;
