import { createStore } from 'redux';
import rootReducer from './reducers';
// rootReducer: sont les controleurs 
const initialtState = {}
const store = createStore(
    rootReducer,
     initialtState,
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;