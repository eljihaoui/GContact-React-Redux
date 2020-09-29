import { createStore } from 'redux';
import rootReducer from './reducers';
// rootReducer: sont les controleurs 
const initialtState = {}
const store = createStore(rootReducer, initialtState);
export default store;