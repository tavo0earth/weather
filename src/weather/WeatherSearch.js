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
import './WeatherSearch.css';

const API_KEY = "8d445e202c88e2e73c06fbe95bc00699";

class WeatherSearch extends React.Component {

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

        this.setState({
            temp: data.main.temp,
            city: data.name,
            country: data.sys.country,
            sunset: sunset_date
        });
    }

    render() {

        const [open, setOpen] = React.useState(true);

        const handleClick = () => {
            setOpen(!open);
        }

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
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className="submit">
                            Search
                        </Button>
                    </form>
                    <div className="list">
                        {this.city &&
                        <List>
                            <ListItem button onClick={handleClick}>
                                <ListItemText>
                                    Город: {this.city}
                                </ListItemText>
                                {open ? <ExpandLess/> : <ExpandMore/>}
                            </ListItem>
                            <Collapse in={!open} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItem button>
                                        <ListItemText>
                                            <p>Местоположение: {this.city}, {this.country}</p>
                                            <p>Температура: {this.temp}</p>
                                            <p>Заход солнца: {this.sunset}</p>
                                        </ListItemText>
                                    </ListItem>
                                </List>
                            </Collapse>
                        </List>
                        }
                    </div>
                </div>
            </Container>
        );
    }
}

export default WeatherSearch

