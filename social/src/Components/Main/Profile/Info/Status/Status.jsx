import React, {useEffect, useState} from "react";
import s from "./Status.module.css"

const Status = ({owner,status, settingStatus}) => {
    let [editMode, setEditMode] = useState(false);
    let [statusString, setStatus] = useState(status);

    const editModeOn = () => setEditMode(true);
    const editModeOff = () =>{
        setEditMode(false);
        settingStatus(statusString);
    }
    const statusChange = (e) => setStatus( e.currentTarget.value);
    useEffect(()=>{
        setStatus(status)},[status]
    )


    return (
        <div className={s.info__status}>
            <ul onBlur={editModeOff} onDoubleClick={owner?editModeOn:null} className={s.status__row}>
                <li className={s.status__text}>Status:</li>
                {!editMode &&
                <li className={s.status__data}>{status} </li>}
                {editMode &&
                <li><input value={statusString} onChange={statusChange} autoFocus={true}/></li>}
            </ul>
        </div>
    )
}

export default Status;
