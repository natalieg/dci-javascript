import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link, useParams, useRouteMatch } from 'react-router-dom';
export default class NestedRoutes extends Component {
    render() {
        return (
            <div>
                <hr />
                <h1> this is the nested route Example</h1>
                <Router>
                    <div>
                        <ul>
                            <li>
                                <Link to="/" >Home</Link>
                            </li>
                            <li>
                                <Link to="/topics" > Topics to Learn </Link>
                            </li>
                        </ul>
                        <hr />
                        <Switch>
                            <Route exact path="/">
                                <Home />
                            </Route>

                            <Route path="/topics" >
                                <Topics />
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}
const Home = () => (
    <div>
        <h2> Home page</h2>
    </div>
)

function Topics() {
    let { path, url } = useRouteMatch();
    return (
        <div>
            <h3>Topics</h3>
            <ul>
                <li>
                    <Link to={`${url}/class-component`}>Class Components in React</Link>
                </li>
                <li>
                    <Link to={`${url}/reactstrap`}>Bootstrap with React</Link>
                </li>
                <li>
                    <Link to={`${url}/state-props`}>State and props in React</Link>
                </li>
            </ul>
            <Switch>
                <Route exact path={path}>
                    <h4>Please select a topic</h4>
                </Route>
                <Route path={`${path}/:topicId`}>
                    <Topic />
                </Route>
            </Switch>
        </div>
    )
}

function Topic() {
    let { topicId } = useParams();
    return (
        <div>
            <h4>{topicId}</h4>
        </div>
    )
}