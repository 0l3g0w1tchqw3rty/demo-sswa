import React from "react";
import n from "./Name.module.css"

const Name = (props) => {
    return (
        <div className={n.info__name}>{props.name}</div>
    )
}
export default Name;
