import React from "react";
import j from "./Job.module.css"

const Job = (props) => {
    return (
        <div className={j.info__job}>
            <ul className={j.job__row}>
                <li className={j.job__text}>Looking for job: <span>{props.job ? " Yes" : " No"}</span></li>
                <li className={j.job__data}>
                    Prof Skills: <span> {props.jobstatus === null ? " No Description" : props.jobstatus}</span></li>
            </ul>
        </div>
    )
}
export default Job;
