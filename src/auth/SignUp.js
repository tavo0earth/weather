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
    signUpBlock: {
        width: '100%',
        borderRadius: '10px',
        padding: theme.spacing(5, 3, 5),
        backgroundColor: 'white',
        marginTop: theme.spacing(10),
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


export default function SignUp() {
    const classes = useStyles();

    return (
        <Container maxWidth="xs">
            <CssBaseline />
            <div className={classes.signUpBlock}>
                    <Typography component="h1" variant="h3">
                    Регистрация
                    </Typography>
                <form className={classes.form}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="userName"
                        label="Ваше Имя"
                        name="userName"
                        autoComplete="userName"
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
                        className={classes.submit}
                    >
                        Sign In
                    </Button>
                </form>
            </div>
        </Container>
        )
    }