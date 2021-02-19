import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import App from './App1.js'
import table from './App.js';

class Routes extends Component {
    render() {
        return (

            <Router>
                <Switch>
                    <Route exact path ="/" component={App} />
                    <Route path ="/tables" component={table} />

                </Switch>
            </Router>
        );
    }
}

export default Routes;