import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import React from 'react';

const Welcome = () => <h1>Welcome</h1>
const About = () => <h1>About</h1>
const Home = () => <h1>Home</h1>
const Person = () => <h1>Person</h1>
const NotFound = () => <h1>Not Found</h1>

const DemoRouter = () => {
    return(
        <div className='container'>
            <Router>
                <Header/>
                <Switch>
                    <Route path="/welcome" component={Welcome}/>
                    <Route path="/about" component={About}/>
                    <Route path="/home" component={Home}/>
                    <Route path="/person" component={Person}/>
                    <Route path="/notfound" component={NotFound}/>
                </Switch>
            </Router>
        </div>
    )
}

const Header = () => {
    return(
        <nav className="navbar navbar-dark bg-dark nav-fill">
            <Link className="nav-link text-light" to="/welcome">Welcome</Link>
            <Link className="nav-link text-light" to="/home">Home</Link>
            <Link className="nav-link text-light" to="/about">About</Link>
            <Link className="nav-link text-light" to="/person">Person</Link>
            <Link className="nav-link text-light" to="/notfound">Not Found</Link>
        </nav>
    )
}

export default DemoRouter