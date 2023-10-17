import React from 'react';
import ReactDom from "react-dom/client";
// provider helps us to track the global state and access it anywhere inside the app , child component
import {Provider} from 'react-redux';
import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

import App from './App';
import './index.css';

const store = createStore(reducers, compose(applyMiddleware(thunk)));
const root = ReactDom.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);