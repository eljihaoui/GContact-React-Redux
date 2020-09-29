import { combineReducers } from 'redux';
import contactReducer from './contactReducer';
combineReducers({
    contact: contactReducer
})