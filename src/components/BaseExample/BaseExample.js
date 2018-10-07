import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

const BasicExample = () => (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/topics">Topics</Link>
                </li>
                <li>
                    <Link to={{
                        pathname: "/default",
                        search: "?eee=eee",
                        hash: "he-hash",
                        state: {
                            dddd: "fdfd"
                        }

                    }}>Link Page</Link>
                </li>
                <li>
                    <NavLink to={{
                        pathname: "/navLink/1234",
                        state: {
                            dddd: "dfdfdfd"
                        }
                    }}>navLink</NavLink>
                </li>
            </ul>

            <hr />

            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/topics" component={Topics} />
            <Route path={"/default"} component={Default}/>
            <Route path={"/navLink/:id"} component={NavDefault}/>
        </div>
    </Router>
);

class NavDefault extends  Component{
    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props)
        return (
            <div>

                NavDefault:{this.props.match.params.id}
            </div>
        )
    }
}

const Default = () => (
    <div>
        Default Page
    </div>
)

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
);

const About = () => (
    <div>
        <h2>About</h2>
    </div>
);

const Topics = ({ match }) => (
    <div>
        <h2>Topics</h2>
        <ul>
            <li>
                <Link to={`${match.url}/rendering`}>Rendering with React</Link>
            </li>
            <li>
                <Link to={`${match.url}/components`}>Components</Link>
            </li>
            <li>
                <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
            </li>
        </ul>

        <Route path={`${match.url}/:topicId`} component={Topic} />
        <Route
            exact
            path={match.url}
            render={() => <h3>Please select a topic.</h3>}
        />
    </div>
);

const Topic = ({ match }) => (
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
);


export default BasicExample;