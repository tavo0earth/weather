import React from 'react';
import SignUp from './auth/SignUp';
import Login from './auth/Login';
import WeatherSearch from './weather/WeatherSearch';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

class App extends React.Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={Login}/>
                    <Route exact path='/SignUp' component={SignUp}/>
                    <Route exact path='/WeatherSearch' component={WeatherSearch}/>
                </Switch>
            </Router>
        )
    }
}

export default App;



