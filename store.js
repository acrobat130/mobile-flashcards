import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

const createStoreWithMiddleware = compose(
  applyMiddleware(thunk),
)(createStore);

export default createStoreWithMiddleware(reducer);
