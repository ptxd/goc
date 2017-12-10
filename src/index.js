import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import {BrowserRouter as Router} from 'react-router-dom';
import Provide, { Provider } from 'react-redux';
import configureStore from './store/store';

//service worker
import registerServiceWorker from './registerServiceWorker';

//css files for the project
import 'semantic-ui-css/semantic.min.css';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
, document.getElementById('root'));
registerServiceWorker();
