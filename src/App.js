import React from 'react';
import SignUp from './auth/SignUp';
import Login from './auth/Login';


class App extends React.Component {
    render() {
        return (
            <div>
                <SignUp/>
                <Login/>
            </div>
        )
    }
}






export default App;