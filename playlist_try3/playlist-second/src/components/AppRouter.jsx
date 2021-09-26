import { Route, Switch, Redirect } from 'react-router-dom';
import { privateRroutes, publicRotes } from '../routes';
import React, { useContext } from 'react';
import { LoginContext } from '../context/loginContext';

function AppRouter() {
    const { isUserLogin } = useContext(LoginContext);

    return (
        <>
            {
                isUserLogin ?
                    <Switch>
                        {
                            privateRroutes.map(route =>
                                <Route
                                    key={route.path}
                                    path={route.path}
                                    component={route.component}
                                    exact={route.exact}
                                />)
                        }
                        <Redirect to='/playlist'/>
                    </Switch>
                    :
                    <Switch>
                        {
                            publicRotes.map(route =>
                                <Route
                                    key={route.path}
                                    path={route.path}
                                    component={route.component}
                                    exact={route.exact}
                                />)
                        }
                        <Redirect to='/login'/>
                    </Switch>
            }
            
        </>
     );
}

export default AppRouter;