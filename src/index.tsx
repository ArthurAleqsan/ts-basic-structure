import React, { Suspense } from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router-dom';
import { history } from './store/configStore';
import Routes from './containers/router';
import './../assets/styles/index.scss';

render((
        <Router history={history}>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes />
            </Suspense>
        </Router>
), document.getElementById('app'));