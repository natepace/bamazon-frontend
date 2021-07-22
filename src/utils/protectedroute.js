import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => ( // This code means that the component can accept a component Prop, just like <Route /> does, and take any other prop that gets passed into it by spreading in ...rest.
    <Route
        {...rest}
        render={props =>
            localStorage.getItem('token') ? (<Component {...props} />) : (<Redirect to='/Login' />)
        }
    />
);

export default ProtectedRoute;