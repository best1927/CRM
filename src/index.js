import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import './index.css';
import registerServiceWorker from './registerServiceWorker';
import "./css/font-awesome/css/font-awesome.css";
import "./css/AdminLTE/dist/css/AdminLTE.css";
import "./css/bootstrap/css/bootstrap.css";

import "./css/treechart.css";
import "./css/chat.css";
import "./css/AdminLTE/dist/css/skins/_all-skins.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import {BrowserRouter, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers'; 
import promise from 'redux-promise'
import "./css/crmcustom.css";

 
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    <App/>

</BrowserRouter>
</Provider>, document.getElementById('root'));

registerServiceWorker();
