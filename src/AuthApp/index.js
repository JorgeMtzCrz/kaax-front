import React from 'react'
import {Switch, Route, Redirect, BrowserRouter} from 'react-router-dom'
import { Addressee } from './Pages/Addressee'
import { Profile } from './Pages/Profile'
import { CreateAddressee } from './Pages/CreateAddressee'
import { CreateMovement } from './Pages/MovementCreate'

export default function  AuthApp() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/app" component={Profile} />
                <Route exact path="/app/movements/create" component={CreateMovement} />

                <Route exact path="/app/addressees" component={Addressee} />
                <Route exact path="/app/addressees/create" component={CreateAddressee} />
                <Redirect to="/app"/>  
            </Switch>
        </BrowserRouter>
    )
}
