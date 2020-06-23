import React from "react";
import y from "./CommonSocial.module.css"
import youtube from "../../../../../assets/Profile/youtube.svg"

const YouTube = (props) => {
    return (
                    <div className={y.contacts__container}>
                        <ul className={y.contacts__row}>
                            <li className={y.contacts__img}><img src={youtube} alt="Something gone wrong"/></li>
                            <li className={y.contacts__txt}>YouTube:</li>
                            <li className={y.contacts__data}>{props.yt}</li>
                        </ul>
                    </div>
    )
}
export default YouTube;
