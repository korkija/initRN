import React,  from 'react';
import {Provider} from 'react-redux'
import ReduxThunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {createStore, applyMiddleware, combineReducers} from 'redux'
import {people} from "./src/reducers/people";
import NavStack from "./components/NavStack";

const reducers = combineReducers({people});
const store = createStore(reducers, composeWithDevTools(applyMiddleware(ReduxThunk)));

export default App = () => (
    <Provider store={store}>
        <NavStack/>
    </Provider>
);
