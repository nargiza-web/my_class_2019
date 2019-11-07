import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Clock from './components/Clock'
import Timer from './components/Timer'
import Alarm from './components/Alarm'

export default class AppRouter extends React.Component {
    render(){
        return(
            <Router>
                <ul>
                    <li><Link to="/">Home Page</Link></li>
                    <li><Link to="/clock">Clock Page</Link></li>
                    <li><Link to="/timer">Timer Page</Link></li>
                    <li><Link to="/alarm">Alarm Page</Link></li>
                </ul>
                
                <Switch>
                    <Route exact path="/">
                        <h1>Best Clock App ever </h1>
                    </Route>
                    
                    <Route exact path="/clock">
                        <Clock/>
                    </Route>
                    
                    <Route exact path="/timer">
                        <Timer/>
                    </Route>
                    
                    <Route exact path="/alarm">
                        <Alarm/>
                    </Route>
                </Switch>
            </Router>
        )
    }
}