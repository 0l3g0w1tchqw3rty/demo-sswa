import React, {FC} from "react"
import n from "./UserName.module.css"

type PropsType = {
    name: string
}

const UserName: FC<PropsType> = ({name}) => {

    return (
        <div className={n.name__container}>
            <div className={n.text__name}>
                Name:
            </div>
            <div className={n.text__data}>
                {name}
            </div>
        </div>
    )

}
export default UserName
