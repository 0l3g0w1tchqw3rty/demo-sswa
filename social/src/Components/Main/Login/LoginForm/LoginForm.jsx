import React from "react";
import f from "./LoginForm.module.css";
import {Field} from "redux-form";
import {LoginInput} from "../../../Common/Form/Form";
import {MaxLengthVal, required} from "../../../../util/validators/validators";
import e from "../../../Common/Form/Form.module.css"


const maxLength10 = MaxLengthVal(10);
const maxLength64 = MaxLengthVal(64);
const maxLength18 = MaxLengthVal(18);


const LoginForm = (props) => {

    return (

            <form onSubmit={props.handleSubmit} className={f.main__form} autoComplete="on">
                {props.capUrl!==null&&
                <label className={f.form__captcha}>
                    <img src={props.capUrl} alt={'captcha'} />
                    <Field name="captcha" validate={[required, maxLength10]} component={LoginInput} type="text"/>
                </label>}
                <label className={f.form__login}>username:
                    <Field name="email" validate={[required,maxLength64]} component={LoginInput} type="text"/>
                </label>
                <label className={f.form__pass}>password:
                    <Field name="password" validate={[required, maxLength18]} component={LoginInput} type="password"/>
                </label>
                <label className={f.form__remember}>
                    Remeber me
                    <Field name="rememberMe" component={LoginInput} type="checkbox"/>
                </label>
                { props.error && <div className={e.error__fields}> {props.error} </div>}
                <button type="submit" className={f.form__logb}>Log in</button>

            </form>
    )
}

export default LoginForm;



