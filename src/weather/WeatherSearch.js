import React from 'react';
import Button from '@material-ui/core/Button';
import {makeStyles} from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InboxIcon from '@material-ui/icons/MoveToInbox';

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
    list: {
        width: '90%',
        marginTop: theme.spacing(1),
    },
}));

export default function WeatherSearch(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    function handleClick() {
        setOpen(!open);
    }
    return (

        <Container maxWidth="xs">
            <CssBaseline/>
            <div className={classes.loginBlock}>
                <Typography component="h1" variant="h3">
                    Поиск погоды
                </Typography>
                <form className={classes.form} onSubmit={props.weatherMetod}>
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
                        className={classes.submit}>
                        Search
                    </Button>
                </form>
                <div className={classes.list}>
                    {props.city &&
                    <List>
                        <ListItem button onClick={handleClick}>
                            <ListItemText>
                                Город: {props.city}
                            </ListItemText>
                            {open ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={!open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItem button className={classes.nested}>
                                    <ListItemText>
                                        <p>Местоположение: {props.city}, {props.country}</p>
                                        <p>Температура: {props.temp}</p>
                                        <p>Заход солнца: {props.sunset}</p>
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


