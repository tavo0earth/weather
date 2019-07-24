import React from 'react';
import Button from '@material-ui/core/Button';
import {makeStyles} from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundColor: 'grey',
        },
    },
    loginBlock: {
        width: '100%',
        borderRadius: '10px',
        padding: theme.spacing(5, 3, 5),
        backgroundColor: 'white',
        margin: theme.spacing(10, 0, 10, 0),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '90%',
        marginTop: theme.spacing(1),
    },
    submit: {

        margin: theme.spacing(3, 0, 0),
    },
}));

class WeatherSearch extends React.Component {

    render() {

        return (

            <Container maxWidth="xs">
                <CssBaseline/>
                <div style={
                    {
                        width: '100%',
                        borderRadius: '10px',
                        paddingTop: '40px',
                        paddingBottom: '40px',
                        backgroundColor: 'white',
                        marginBottom: '80px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }

                }>
                    <Typography component="h1" variant="h3">
                        Поиск погоды
                    </Typography>
                    <form onSubmit={this.props.weatherMetod}
                          style={
                              {
                                  width: '80%',
                                  marginTop: '10px',
                              }
                              }>
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
                            style={
                                {
                                    marginTop: '20px',
                                }
                            }>
                            Search
                        </Button>
                    </form>
                    <div>
                        {this.props.city &&
                        <div>
                            <p>Местоположение: {this.props.city}, {this.props.country}</p>
                            <p>Температура: {this.props.temp}</p>
                            <p>Заход солнца: {this.props.sunset}</p>
                        </div>
                        }
                    </div>
                </div>
            </Container>
        )
    }
}

export default WeatherSearch;

