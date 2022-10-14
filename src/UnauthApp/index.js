import React from 'react'
import {Switch, Route, Redirect, BrowserRouter} from 'react-router-dom'
import Login from './pages/Login'
import SignUp from './pages/Signup'

function UnauthApp (){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route exact path="/signup" component={SignUp} />
                <Redirect to="/"/>  
            </Switch>
        </BrowserRouter>
    )
}

export default UnauthApp