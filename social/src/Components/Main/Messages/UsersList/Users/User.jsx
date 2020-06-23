import React from "react";
import m from "./Users.module.css";
import photo from "../../../../../assets/Profile/photo.svg";
import {NavLink} from "react-router-dom";


const User = (props) => {

    let path = "/messages/" + props.id;

    return (

        <div className={m.user__data}>
            <NavLink className={m.user} activeClassName={m.active} to={path}>
                <img className={m.user__photo} src={photo} alt="Something gone wrong"/>
                {props.name}
            </NavLink>
        </div>

    )
}


export default User;
