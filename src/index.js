import React from 'react';
import ReactDOM from 'react-dom'
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import combineReducers from './redux/reducers/combine-reducers';
import createSagaMiddleware from 'redux-saga'
import './index.css';
import App from './components/app/app';
import watchShowItemsList from './redux/actions/items-actions'

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    combineReducers,
    composeEnhancers( applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(watchShowItemsList);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)
