import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import Page from './pages/Page'
import Books from './pages/Books'
import BooksId from './pages/BooksId'

class AppRouter extends React.Component {
    render(){
        return(
            <Router>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/latest">Latest Book I am Reading</Link></li>
                    <li><Link to="/books">Books</Link></li>
                    <li><Link to="/books/12309">Book 12309</Link></li>
                </ul>
                <Switch>
                    <Route exact path ="/">
                        <Page name="Home"/>
                    </Route>
                    <Route exact path="/latest">
                        <Page name="Grit Book"/>
                    </Route>
                    <Route exact path = "/books">
                        <Books/>
                    </Route>
                    <Route exact path="/books/:id">
                        <BooksId/>
                    </Route>
                    <Router>
                        <Page name="Not Found Your"/>
                    </Router>
                </Switch>
            </Router>
        )
    }
}

export default AppRouter