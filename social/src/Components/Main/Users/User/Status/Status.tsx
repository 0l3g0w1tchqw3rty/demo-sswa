import React from "react"
import s from "./Status.module.css"

type PropsType = {
    status: string | null
}

const Status: React.FC<PropsType> = ({status}) => {

    return (
        <div className={s.status__container}>
            <div className={s.status}>
                Status:
            </div>
            <div className={s.status__data}>
                {status === null ? " no status" : status}
            </div>
        </div>
    )
}
export default Status
