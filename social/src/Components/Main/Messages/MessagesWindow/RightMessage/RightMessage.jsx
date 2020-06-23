import React from "react";
import m from "./RightMessage.module.css";

const RightMessage = (props) => {

    return (

        <div className={m.right__message}>
            <div className={m.message}>{props.message}</div>
        </div>

    )
}

export default RightMessage;
