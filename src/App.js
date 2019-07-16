import React from 'react';

class App extends React.Component {
  render() {
    return (
        <div>
          <div id="signUp">
            <form>
              <h1> Зарегестрироваться </h1>
              <p>
                <label className="userName">Ваше Имя Пользователя</label>
                <input id="userNameSignUp" name="usernamesignup" required="required" type="text"
                       placeholder="Username"/>
              </p>
              <p>
                <label className="youMail">Ваш email</label>
                <input id="emailSignUp" name="emailsignup" required="required" type="text"
                       placeholder="Email"/>
              </p>
              <p>
                <label className="youPassword">Ваш пароль</label>
                <input id="passwordSignUp" name="passwordsignup" required="required" type="password"
                       placeholder="password"/>
              </p>
              <p>
                <label className="youPassword">Повторите пароль</label>
                <input id="passwordСonfirm" name="password_confirm" required="required" type="password"
                       placeholder="password confirm"/>
              </p>
              <p className="signIn_button">
                <input type="submit" value="Sign up"/>
              </p>
            </form>
          </div>

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
                <input id="password" name="password" required="required" type="password" placeholder="password"/>
              </p>
              <p className="login_button">
                <input type="submit" value="Login"/>
              </p>
            </form>
          </div>
        </div>
    );
  }
}

export default App;