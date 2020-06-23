import React from "react";
import f from "./CommonSocial.module.css"
import facebook from "../../../../../assets/Profile/facebook.svg"

const Facebook = (props) => {
    return (
                    <div className={f.contacts__container}>
                        <ul className={f.contacts__row}>
                            <li className={f.contacts__img}><img src={facebook} alt="Something gone wrong"/></li>
                            <li className={f.contacts__txt}>Facebook:</li>
                            <li className={f.contacts__data}><a href={props.fb}>{props.fb}</a></li>
                        </ul>
                    </div>
    )
}
export default Facebook;
