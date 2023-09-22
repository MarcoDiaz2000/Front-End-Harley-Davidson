import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import motorcyclesReducer from './motorcycles/motorcycles';
import reservationsReducer from './reservations/reservations';

const reducer = combineReducers({
  motorcycles: motorcyclesReducer,
  reservations: reservationsReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
