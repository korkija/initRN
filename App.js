import React from 'react';
import {Provider} from 'react-redux'
import ModalStack from "./navigation/ModalStack";
import {YellowBox} from 'react-native';
import {store} from "./store/store";

YellowBox.ignoreWarnings(['Remote debugger']);

export default App = () => (
    <Provider store={store}>
        <ModalStack/>
    </Provider>
);
