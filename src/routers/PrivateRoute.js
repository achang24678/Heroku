import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';
                                                                        // rest for fetching the rest of the props such as exact, path in AppRouter
                                                                        // rest contains all stuff that we did not destructure, but not the one we destructured such as isAuthenticated
export const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => ( //destructuring from mapStateToProps and also in AppRouter such as: component={ExpenseDashboardPage}
    
    // add some conditional logic to determine whether user is authenticated or not, then we can take correct action either rendering the private stuff or redirecting them over to a public page
    <Route {...rest} component={(props) => (     // route only gets ...rest passed to it
        isAuthenticated ?   // if isAuthenticated, we wanna get some JSX, some components render to the screen, gets all of the necessary prop
        (           // Header shows up just in those private pages
        <div>
            <Header />
            <Component {...props} />    
        </div>
        ) 
        :    
        (<Redirect to='/' /> )          // if not Authenticated, we use Redirect us to login page
    )}/>      
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid //if uid exist, then we are authenticated, if not, then we are not authenticated
});

export default connect(mapStateToProps)(PrivateRoute);