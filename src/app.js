import React from 'react';
import {Provider} from 'react-redux';
import {applyMiddleware,createStore} from 'redux';
import promiseMiddleware from 'redux-promise';
const createStoreWithMiddleware=applyMiddleware(promiseMiddleware)(createStore);
import reducers from '../reducers/index';
import Home from './Components/home';
import Form from './Components/form';
const App=()=>{
    return(
        <Provider store={createStoreWithMiddleware(reducers)}>
            <h1>This App do nothing</h1>
            <Home/>
            <Form/>
        </Provider>
    )
}

export default App;