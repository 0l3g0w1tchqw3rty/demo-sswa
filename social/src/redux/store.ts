import {applyMiddleware, combineReducers, compose, createStore} from "redux"
import profileReducer from "./reducers/profileReducer"
import messagesReducer from "./reducers/messagesReducer"
import usersReducer from "./reducers/usersReducer"
import authReducer from "./reducers/authReducer"
import thunk from "redux-thunk"
import {reducer as formReducer} from 'redux-form'
import appReducer from "./reducers/appReducer"

let rootReducer = combineReducers(
    {
        profilePage: profileReducer,
        messages: messagesReducer,
        usersPage: usersReducer,
        auth: authReducer,
        app: appReducer,
        form: formReducer
    }
)
type RootReducerType = typeof rootReducer
export type StateType = ReturnType<RootReducerType>


// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
// @ts-ignore
window.store = store
export default store