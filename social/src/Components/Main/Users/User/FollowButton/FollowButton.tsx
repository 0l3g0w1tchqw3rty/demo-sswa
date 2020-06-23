import React, {FC} from "react"
import b from "./FollowButton.module.css"

type PropsType = {
    followingProgress: Array<number>
    following: (id: number) => void
    unfollowing: (id: number) => void
    userId: number
    followed: boolean
}

const FollowButton: FC<PropsType> = ({
                                         userId,
                                         followed,
                                         followingProgress,
                                         unfollowing,
                                         following
                                     }) => {

    return (
        <div className={b.column__button}>
            {followed
                ?
                <button disabled={followingProgress.some(id => id === userId)} className={b.button__follow}
                        onClick={() => unfollowing(userId)}>Unfollow
                </button>
                :
                <button disabled={followingProgress.some(id => id === userId)} className={b.button__follow}
                        onClick={() => following(userId)}>Follow
                </button>
            }
        </div>
    )
};
export default FollowButton;
