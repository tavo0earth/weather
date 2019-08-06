import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import Box from '@material-ui/core/Box';
import './WeatherSearch.css';

const API_KEY = "8d445e202c88e2e73c06fbe95bc00699";

class WeatherSearch extends React.Component {

    state = {
        temp: null,
        city: null,
        country: null,
        sunset: null,
        isOpened: false,
        cities: [],
    };

    // при маунте элемента записываем данные из локал стореджа в стейт
    componentDidMount() {
        const cities = JSON.parse(localStorage.getItem('cities')) || [];
        this.setState({cities});
    }

    toggleState() {
        this.setState({ isOpened: !this.state.isOpened });
    }

    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await api_url.json();

        const sunset = data.sys.sunset;
        const date = new Date();
        date.setTime(sunset);
        const sunset_date = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

        // достаём из локал стореджа то что сохранили и преобразуем это в массив
        const localStorageCities = JSON.parse(localStorage.getItem('cities'))  || [];
        const cities = [...localStorageCities, {
            temp: data.main.temp,
            city: data.name,
            country: data.sys.country,
            sunset: sunset_date
        }];

        this.setState({
            temp: data.main.temp,
            city: data.name,
            country: data.sys.country,
            sunset: sunset_date,
            cities
        });

        const citiesObj = JSON.stringify(cities);
        localStorage.setItem('cities', citiesObj);
    };

    setCityFromLocalStorage = (city) => {
        //TODO: add logic for selecting cities, that are already in local storage

        let dropdownText;
        if (this.state.isOpened) {
            dropdownText =
                <div>
                    <p>Местоположение: {this.state.city}, {this.state.country}</p>
                    <p>Температура: {this.state.temp}</p>
                    <p>Заход солнца: {this.state.sunset}</p>
                </div>;
        }

        return (
            <div onClick={this.toggleState.bind(this)}>
                {this.renderCities()}
                {dropdownText}
            </div>

        )
    }

    renderCities = () => {
        // рисуем список городов
        return this.state.cities.map((city, index) => (
          <Button key={index} onClick={() => this.setCityFromLocalStorage(city)}>{city.city}</Button>
        ))
    };

    render() {

        return (
            <Container maxWidth="xs">
                <CssBaseline/>
                <div className="searchBlock">
                    <Typography component="h1" variant="h3">
                        Поиск погоды
                    </Typography>
                    <form className="form" onSubmit={this.getWeather}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="city"
                            label="Введите город"
                            name="city"
                            autoComplete="city"
                        />
                        <Box mt={2}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary">
                            Search
                        </Button>
                        </Box>
                    </form>
                        {this.setCityFromLocalStorage()}
                </div>
            </Container>
        );
    }
}

export default WeatherSearch