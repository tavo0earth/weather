import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import './Login.css';

class Login extends React.Component {

    render() {

        return (
            <Container maxWidth="xs">
                <CssBaseline/>
                <div className="loginBlock">
                    <Typography component="h1" variant="h3">
                        Авторизация
                    </Typography>
                    <form className="form">
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="userName"
                            label="Ваш email или Имя"
                            name="userName"
                            autoComplete="userName"
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="password"
                            label="Ваш пароль"
                            name="password"
                            autoComplete="password"
                        />
                        <Box mt={2}>
                            <Link to={'/WeatherSearch'}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                            >
                                Login
                            </Button>
                            </Link>
                        </Box>
                    </form>
                    <div>
                        <Link to={'/SignUp'}>Нету аккаунта? Зарегестрироваться!</Link>
                    </div>
                </div>
            </Container>
        )
    }
}

export default Login