import ReduxThunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {createStore, applyMiddleware, combineReducers} from 'redux'
import {people} from "./reducers/people";
const reducers = combineReducers({people});

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(ReduxThunk)));

