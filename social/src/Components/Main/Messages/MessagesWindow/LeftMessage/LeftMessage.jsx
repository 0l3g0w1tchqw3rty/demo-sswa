import React from "react";
import m from "./LeftMessage.module.css";

const LeftMessage = (props) => {

    return (
        <div className={m.left__message}>
            <div className={m.message}>{props.message}</div>
        </div>
    )
}

export default LeftMessage;
