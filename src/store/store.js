import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// Root Reducers
import rootReducer from './reducers';

// Initial State
const initialState = {};

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};

// const store = createStore(
//     rootReducer,
//     initialState,
//     compose(
//         // applyMiddleware(...middleware),
//         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     )
// )

export default configureStore;
