import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

/*
import React from 'react';

class Form extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.weatherMetod}>
                <input type="text" name="city" placeholder="City..."/>
                <button>Get Weather</button>
            </form>
        )
    }
}
export default Form;
http://api.openweathermap.org/data/2.5/weather?q=Kiev&APPID={8d445e202c88e2e73c06fbe95bc00699}&units=metric
*/