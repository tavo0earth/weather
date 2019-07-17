import React from 'react';

class Login extends React.Component {
    render() {
        return (
            <div id="login">
                <form>
                    <h1>Авторизоваться</h1>
                    <p>
                        <label className="userName">Ваш email или Имя Пользователя</label>
                        <input id="userName" name="username" required="required" type="text"
                               placeholder="myusername or mymail@mail.com"/>
                    </p>
                    <p>
                        <label className="youPassword">Ваш пароль</label>
                        <input id="password" name="password" required="required" type="password"
                               placeholder="password"/>
                    </p>
                    <p className="login_button">
                        <input type="submit" value="Login"/>
                    </p>
                </form>
            </div>
        )
    }
}

export default Login;