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
        open: false
    };

    handleClick = () => {
        this.setState({open: !this.state.open});
    };

    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await api_url.json();
        console.log(data);

        const sunset = data.sys.sunset;
        const date = new Date();
        date.setTime(sunset);
        const sunset_date = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

        this.setState({
            temp: data.main.temp,
            city: data.name,
            country: data.sys.country,
            sunset: sunset_date
        });

        localStorage.setItem('cities', data.name);
        localStorage.setItem('countries', data.sys.country);
        localStorage.setItem('temps', data.main.temp);
        localStorage.setItem('sunsets', sunset_date);
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
                    <div className="list">
                        {this.state.city &&
                        <List>
                            <ListItem button onClick={this.handleClick}>
                                <ListItemText>
                                    Город: {localStorage.getItem('cities')}
                                </ListItemText>
                                {this.state.open ? <ExpandLess/> : <ExpandMore/>}
                            </ListItem>
                            <Collapse in={!!this.state.open} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItem button>
                                        <ListItemText>
                                            <p>Местоположение: {localStorage.getItem('cities')}, {localStorage.getItem('countries')}</p>
                                            <p>Температура: {localStorage.getItem('temps')}</p>
                                            <p>Заход солнца: {localStorage.getItem('sunsets')}</p>
                                        </ListItemText>
                                    </ListItem>
                                </List>
                            </Collapse>
                        </List>
                        }
                    </div>
                   <div className="saveCity">
                   </div>
                </div>
            </Container>
        );
    }
}

export default WeatherSearch