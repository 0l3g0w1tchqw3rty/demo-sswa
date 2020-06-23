import React from "react"
import s from "./Settings.module.css"
import Preloader from "../../Common/Preloader/Preloader"
import SettingsForm from "./SettingsForm/SettingsForm"
import {reduxForm} from "redux-form"


const Settings = (props) => {
    const selectPhoto = (event) => {
        props.uploadPhoto(event.target.files[0])
    }

    const onSubmit = (formData) => {
        props.savingProfile(formData);

    }

    return (
        <main className={s.main}>
            {props.isFetching ? <Preloader/> :
                <div className={s.main__container}>
                    <section className={s.main__status}>
                        <p>To Change your's status plz use dbclick on status string, then click on empty space.</p>
                    </section>
                    <section className={s.main__photo}>Upload Your's Photo:
                        <input className={s.submit} type={"file"} onChange={selectPhoto}/>
                    </section>
                    <SettingsReduxForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit}/>
                </div>}
        </main>
    )
}
const SettingsReduxForm = reduxForm({
    form: "settings"
})(SettingsForm)
export default Settings;
