import React from "react";
import i from "./Id.module.css"

const Id = (props) => {
    return (
        <div className={i.info__id}>
            <ul className={i.id__row}>
                <li className={i.id__text}>Id:</li>
                <li className={i.id__data}>{props.id}</li>
            </ul>
        </div>
    )
}
export default Id;
