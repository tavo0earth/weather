import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import './Login.css';

export default function Login() {

    return (
        <Container maxWidth="xs">
            <CssBaseline />
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
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                    >
                        Login
                    </Button>
                    </Box>
                </form>
                <div>
                    <Link to="/SignUp">>Нету аккаунта? Зарегестрироваться!</Link>
                </div>
            </div>
        </Container>
        )
    }
