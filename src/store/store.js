import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/rootReducer';

function configureStore() {
  const store = createStore(
    rootReducer,
    {},
    compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f,
    ),
  );
  window.store = store;
  return store;
}

export default configureStore;
