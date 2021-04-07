import React from 'react'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './components/pages/home/Home'

export default function MoviesRouter() {
    return (
        <div>
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/"><Home /></Route>
                        
                    </Switch>
                </div>
            </Router>
        </div>
    )
}
