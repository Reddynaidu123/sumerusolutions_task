import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Routes';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import 'bootstrap/dist/css/bootstrap.min.css';

import thunk from 'redux-thunk'
import combinereducers from './combinereducers'
const store = createStore(combinereducers,applyMiddleware(thunk))
ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
  document.getElementById('root')
);