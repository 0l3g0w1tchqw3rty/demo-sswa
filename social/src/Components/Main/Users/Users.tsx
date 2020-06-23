import React from "react"
import m from "./Users.module.css"
import User from "./User/User"
import Preloader from "../../Common/Preloader/Preloader"
import Paginator from "../../Common/Paginator/Paginator"
import {UsersType} from "../../../Types/Types"

type PropsType = {
    totalItems: number
    pageSize: number
    settingCurrentPage: (pages: number) => void
    currentPage: number
    users: Array<UsersType>
    followingProgress: Array<number>
    isFetching: boolean
    following: (id: number) => void
    unfollowing: (id: number) => void
}

const Users: React.FC<PropsType> = ({
                                        isFetching,
                                        users,
                                        following,
                                        unfollowing,
                                        followingProgress,
                                        totalItems,
                                        pageSize,
                                        settingCurrentPage,
                                        currentPage
                                    }) => {

    return (
        <main className={m.main}>
            <div className={m.main__container}>
                {isFetching
                    ? <Preloader/>
                    : <div className={m.user__container}>
                        {users.map(i => <User
                            key={i.id}
                            photos={i.photos}
                            followed={i.followed}
                            userId={i.id}
                            name={i.name}
                            status={i.status}
                            following={following}
                            unfollowing={unfollowing}
                            followingProgress={followingProgress}/>)}
                    </div>}
                <Paginator totalItems={totalItems}
                           pageSize={pageSize}
                           settingCurrentPage={settingCurrentPage}
                           currentPage={currentPage}/>
            </div>
        </main>
    )
}
export default Users