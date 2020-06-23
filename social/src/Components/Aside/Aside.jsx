import React from 'react'
import a from './Aside.module.css'
import profile from "../../assets/Aside/profile.svg"
import messages from "../../assets/Aside/messages.svg"
import users from "../../assets/Aside/users.svg"
import friends from "../../assets/Aside/friends.svg"
import about from "../../assets/Aside/about.svg"
import settings from "../../assets/Aside/settings.svg"
import AsideButton from "./AsideButton"

const Aside = () => {
    return (
        <aside className={a.aside}>
            <div className={a.aside__container}>
                <div className={a.aside__navigation}>
                    <AsideButton cN={a.navigation__button} aCN={a.active} to="/profile"
                                 src={profile} alt="Something gone wrong" text="Profile"/>
                    <AsideButton cN={a.navigation__button} aCN={a.active} to="/messages"
                                 src={messages} alt="Something gone wrong" text="Messages"/>
                    <AsideButton cN={a.navigation__button} aCN={a.active} to="/friends"
                                 src={friends} alt="Something gone wrong" text="Friends"/>
                    <AsideButton cN={a.navigation__button} aCN={a.active} to="/users"
                                 src={users} alt="Something gone wrong" text="Users"/>
                </div>
                <div className={a.aside__settings}>
                    <AsideButton cN={a.settings__button} aCN={a.active} to="/settings"
                                 src={settings} alt="Something gone wrong" text="Settings"/>
                    <AsideButton cN={a.settings__button} aCN={a.active} to="/about"
                                 src={about} alt="Something gone wrong" text="About"/>
                </div>
            </div>
        </aside>
    )
}
export default Aside
