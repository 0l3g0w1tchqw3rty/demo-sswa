import {NavLink} from "react-router-dom";
import React from "react";


const AsideButton = ({cN, aCN, to, src, alt, text}) => {
    return (
        <NavLink className={cN} activeClassName={aCN} to={to}>
            <img src={src} alt={alt}/>
            {text}
        </NavLink>
    )
}
export default AsideButton;