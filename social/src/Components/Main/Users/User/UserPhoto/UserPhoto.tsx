import React, {FC} from "react"
import p from "./UserPhoto.module.css"
import Photo from "../../../../../assets/Profile/photo.svg"
import {PhotosType} from "../../../../../Types/Types"

type PropsType = {
    photos: PhotosType
}

const UserPhoto: FC<PropsType> = ({photos}) => {
    return (
        <div className={p.column__photo}>
            <img className={p.photo} src={photos.small != null ? photos.small : Photo} alt="Something gone wrong"/>
        </div>
    )
}

export default UserPhoto