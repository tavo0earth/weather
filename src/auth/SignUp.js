import React from 'react';

class SignUp extends React.Component {
    render() {
        return (
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
        )
    }
}

export default SignUp;