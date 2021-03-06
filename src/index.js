import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createStore, compose, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import rootReducer from './store/reducers/rootReducer';
import thunk from 'redux-thunk';
import App from './App';
import reportWebVitals from './reportWebVitals';

const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        }) : compose;

const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement)
root.render(
    <Provider store={store}>
        <Router>
            <Routes>
                <Route path='/' element={<App/>}/>
            </Routes>
        </Router>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
