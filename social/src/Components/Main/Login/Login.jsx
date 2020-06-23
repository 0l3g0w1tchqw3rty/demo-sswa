import React from "react";
import l from "./Login.module.css";
import LoginText from "./LoginText/LoginText";
import {reduxForm} from "redux-form";
import LoginForm from "./LoginForm/LoginForm";
import {connect} from "react-redux";
import {login} from "../../../redux/reducers/authReducer";
import {Redirect} from "react-router-dom";


const LoginPage = ({login, isAuth,...props}) => {
    const onSubmit = (formData) => {
        let {email, password, rememberMe,captcha} = formData;
        login(email, password, rememberMe,captcha);
    }

    if (isAuth) {
        return (
            <Redirect to={"/profile"}/>
        )
    }

    return (
        <main className={l.main}>
            <div className={l.main__container}>
                <LoginText/>
                <LoginReduxForm capUrl={props.capUrl} onSubmit={onSubmit}/>
            </div>
        </main>
    )
}
let mapStateToProps = (state) => {
    return {
        capUrl: state.auth.capUrl,
        isAuth: state.auth.isAuth
    }
}
const LoginReduxForm = reduxForm(
    {form: 'login'})(LoginForm)
export default connect(mapStateToProps, {login})(LoginPage);
