import React from 'react';
import SignUp from './auth/SignUp';
import Login from './auth/Login';
import WeatherSearch from './auth/WeatherSearch';

const API_KEY = "8d445e202c88e2e73c06fbe95bc00699";

class App extends React.Component {

    state = {
        temp: undefined,
        city: undefined,
        country: undefined,
        sunset: undefined
    }

    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await api_url.json();
        console.log(data)

        const sunset = data.sys.sunset;
        const date = new Date;
        date.setTime(sunset);
        const sunset_date = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

        this.setState ({
            temp: data.main.temp,
            city: data.name,
            country: data.sys.country,
            sunset: sunset_date
        });
    }

    render() {
        return (
            <div>
                <SignUp/>
                <Login/>
                <WeatherSearch
                    weatherMetod={this.getWeather}
                    temp={this.state.temp}
                    city={this.state.city}
                    country={this.state.country}
                    sunset={this.state.sunset}
                />
            </div>
        )
    }
}

export default App;



