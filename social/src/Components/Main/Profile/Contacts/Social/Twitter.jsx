import React from "react";
import t from "./CommonSocial.module.css"
import tweet from "../../../../../assets/Profile/tweet.svg"

const Twitter = (props) => {
    return (
        <div className={t.contacts__container}>
            <ul className={t.contacts__row}>
                <li ><img className={t.contacts__img} src={tweet} alt="Something gone wrong"/></li>
                <li className={t.contacts__txt}>Twitter:</li>
                <li className={t.contacts__data}>{props.tweet}</li>
            </ul>
        </div>
    )
}
export default Twitter;
