import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

// this is only for login page, if logged in, re-direct to dashboard page, if not logged in, view the login page
                                                                       
export const PublicRoute = ({ isAuthenticated, component: Component, ...rest }) => ( 
    
    
    <Route {...rest} component={(props) => (    
        isAuthenticated ?   
        (<Redirect to='/dashboard' />)  // if already logged in, re-direct user to /dashboard page when the previous need to redirect to /
        :    
        (<Component {...props} />)      // if not logged in, allow to view the login page
    )}/>      
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid //if uid exist, then we are authenticated, if not, then we are not authenticated
});

export default connect(mapStateToProps)(PublicRoute);