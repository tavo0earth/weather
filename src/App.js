import React from 'react';
import SignUp from './auth/SignUp';
import Login from './auth/Login';
import WeatherSearch from './weather/WeatherSearch';
import './App.css';

class App extends React.Component {

    render() {
        return (
            <div className="body">
                <SignUp/>
                <Login/>
                <WeatherSearch

                />
            </div>
        )
    }
}

export default App;



