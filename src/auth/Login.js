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

export default function Login() {
    const classes = useStyles();

    return (
        <Container maxWidth="xs">
            <CssBaseline />
            <div className={classes.loginBlock}>
                <Typography component="h1" variant="h3">
                    Авторизация
                </Typography>
                <form className={classes.form}>
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
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Login
                    </Button>
                </form>
            </div>
        </Container>
        )
    }
