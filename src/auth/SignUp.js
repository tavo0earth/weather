import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import './SignUp.css';

export default function SignUp() {

    return (
        <Container maxWidth="xs">
            <CssBaseline />
            <div className="signUpBlock">
                    <Typography component="h1" variant="h3">
                    Регистрация
                    </Typography>
                <form className="form">
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="newName"
                        label="Ваше Имя"
                        name="newName"
                        autoComplete="newName"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Ваш email"
                        name="email"
                        autoComplete="email"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="passwordSignUp"
                        label="Введите пароль"
                        type="password"
                        id="passwordSignUp"
                        autoComplete="current-password"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="passwordСonfirm"
                        label="Повторите пароль"
                        type="password"
                        id="passwordСonfirm"
                        autoComplete="current-password"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className="submit"
                    >
                        Sign In
                    </Button>
                </form>
            </div>
        </Container>
        )
    }