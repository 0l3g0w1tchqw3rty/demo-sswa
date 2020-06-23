
import React from "react";
import {Field, Form} from "redux-form";
import e from "../../../Common/Form/Form.module.css";
import s from "../Settings.module.css"



const settingsInput =({input,label,meta})=>{

    return(
        <div className={s.form}>
            <label className={s.label}>
                <div  >{label}</div>
                <input{...input}/>
                {meta.error&& meta.visited && <span>{meta.error}</span>}
            </label>
        </div>
    )
}

let SettingsForm = (props) =>{


    return(
        <Form onSubmit={props.handleSubmit}>
            { props.error && <div className={e.error__fields}> {props.error} </div>}
            <h2>MAIN INFO:</h2>
            <Field name="aboutMe" component={settingsInput} label="My Info:" />
            <Field name="fullName" component={settingsInput} label="My Name:" />
            <Field name="lookingForAJobDescription" component={settingsInput} label="My talents:" />
            <div className={s.checkbox}>
            <label > looking for job?:
            <Field className={s.jobchb}  name="lookingForAJob" type="checkbox" component="input"  />
            </label>
            </div>
               <h2>CONTACTS:</h2>
            <Field name="contacts.github" component={settingsInput} label="github:" />
            <Field name="contacts.instagram" component={settingsInput} label="instagram:" />
            <Field name="contacts.twitter" component={settingsInput} label="twitter:" />
            <Field name="contacts.vk" component={settingsInput} label="vk:" />
            <Field name="contacts.facebook" component={settingsInput} label="facebook:" />
            <Field name="contacts.mainLink" component={settingsInput} label="mainLink:" />
            <Field name="contacts.website" component={settingsInput} label="website:" />
            <Field name="contacts.youtube" component={settingsInput} label="youtube:" />
            <button className={s.submit} type="submit">SAVE</button>
        </Form>
    )

}



export default SettingsForm;
