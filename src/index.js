import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import quizApp from './reducers';
import './index.css';
import App from './App';
//import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(quizApp);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
     document.getElementById('root')
);
registerServiceWorker();

