import { Route, BrowserRouter, Switch } from 'react-router-dom'
import React from 'react'

import Home from './pages/Home'

export default (props) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </BrowserRouter>
    )
}