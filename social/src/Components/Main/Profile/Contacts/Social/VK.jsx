import React from "react";
import v from "./CommonSocial.module.css"
import vk from "../../../../../assets/Profile/vk.svg"

const VK = (props) => {
    return (
        <div className={v.contacts__container}>
            <ul className={v.contacts__row}>
                <li className={v.contacts__img}><img src={vk} alt="Something gone wrong"/></li>
                <li className={v.contacts__txt}>VKontakte:</li>
                <li className={v.contacts__data}><a href={props.vk}>{props.vk}</a></li>
            </ul>
        </div>
    )
}
export default VK;
