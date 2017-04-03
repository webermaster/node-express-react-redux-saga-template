import React from 'react';
import {Route, IndexRoute} from 'react-router';
import RootComponent from './RootComponent';
import Hello from './Hello';

const routes = (
    <Route path="/node-template" component={RootComponent}>
        <IndexRoute component={Hello}/>
    </Route>
);

export default routes;