import React from "react";
import p from "./Photo.module.css"
import userPhoto from "../../../../../assets/Profile/photo.svg"

const Photo = ({photo}) => {

    return (
        <div className={p.info__photo}>
            <img src={photo === null ? userPhoto : photo} alt="Something gone wrong"/>
        </div>
    )
}
export default Photo;
