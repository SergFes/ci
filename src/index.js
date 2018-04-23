import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from 'reducers';
import {Router,Route,browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import {Provider} from 'react-redux';
import Layout from 'containers/layout';
import Phones from 'containers/phones';


const store = createStore(reducer,composeWithDevTools(applyMiddleware(thunk)));
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route component={Layout}>
                <Route path='/' component={Phones}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
)