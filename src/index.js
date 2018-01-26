import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import { watchSaga} from './saga/index';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './redux/reducers';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const saga=createSagaMiddleware();
const store=createStore(rootReducer, applyMiddleware(saga))
saga.run(watchSaga)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
