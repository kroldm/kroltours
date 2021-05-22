import React from 'react';

import PrivateRoute from './PrivateRoute';

import Home from './Home';
import Eilat from './Eilat';

export const HomeRoute = <PrivateRoute exact path='/' component={Home} />;
export const EilatRoute = <PrivateRoute exact path='/eilat' component={Eilat} />;
