import {createStore, combineReducers, applyMiddleware} from 'redux'
import budgetReducer from './budgetReducer'
import promiseMiddleware from 'redux-promise-middleware'
import {composeWithDevTools} from 'redux-devtools-extension'
import userReducer from './userReducer'
const rootReducer= combineReducers({
    budget:budgetReducer,
    user:userReducer,
})

export default createStore(rootReducer,composeWithDevTools(applyMiddleware(promiseMiddleware)))