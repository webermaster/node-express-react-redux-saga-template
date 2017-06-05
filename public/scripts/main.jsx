import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './components/routes';
import makeStore from "./redux";
import {Provider} from "react-redux";

const root = (
            <Provider store={makeStore()}>
                <Router routes={routes} history={browserHistory}/>
            </Provider>
        );

ReactDOM.render(root, document.querySelector('.contents'));