import React from "react";
import i from "./CommonSocial.module.css"
import instagram from "../../../../../assets/Profile/instagram.svg"

const Instagram = (props) => {
    return (
        <div className={i.contacts__container}>
            <ul className={i.contacts__row}>
                <li className={i.contacts__img}><img src={instagram} alt="Something gone wrong"/></li>
                <li className={i.contacts__txt}>Instagram:</li>
                <li className={i.contacts__data}>{props.inst}</li>
            </ul>
        </div>
    )
}
export default Instagram;
