import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk'
// rootReducer:  Controller
const devTools=window.__REDUX_DEVTOOLS_EXTENSION__? window.__REDUX_DEVTOOLS_EXTENSION__(): f => f
const initialtState = {}
const store = createStore(
    rootReducer,
    initialtState,
    compose(applyMiddleware(thunk), devTools)
);
//compose : pour passer dans le troisième paramètres deux paramètres à la fois 
export default store;
/*
I had this same issue when I wanted to test my web app on an incognito window (extensions don't show up on incognito windows).

The issue is that compose from redux expects all its arguments to be functions. So when

window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
is evaluated in that environment it returns a boolean.

As @knutwalker mentioned. You'd need to return a function that returns nothing. This fixed it for me,

      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : f => f

*/