import React from "react"
import u from "./User.module.css"
import UserPhoto from "./UserPhoto/UserPhoto"
import FollowButton from "./FollowButton/FollowButton"
import UserName from "./UserName/UserName"
import Status from "./Status/Status"
import {NavLink} from "react-router-dom"
import {PhotosType} from "../../../../Types/Types"

type PropsType = {
    name: string
    userId: number
    photos: PhotosType
    status: string | null
    followed: boolean
    followingProgress: Array<number>
    following: (id: number) => void
    unfollowing: (id: number) => void
}

const User: React.FC<PropsType> = ({
                                       userId,
                                       photos,
                                       followed,
                                       name,
                                       status,
                                       followingProgress,
                                       following,
                                       unfollowing
                                   }) => {
    return (
        <section className={u.main__user}>
            <div className={u.user__column}>
                <NavLink to={'/profile/' + userId}>
                    <UserPhoto photos={photos}/>
                </NavLink>
                <FollowButton
                    followed={followed}
                    following={following}
                    unfollowing={unfollowing}
                    followingProgress={followingProgress}
                    userId={userId}/>
            </div>
            <div className={u.user__text}>
                <UserName name={name}/>
                <Status status={status}/>
            </div>
        </section>
    )
}
export default User
