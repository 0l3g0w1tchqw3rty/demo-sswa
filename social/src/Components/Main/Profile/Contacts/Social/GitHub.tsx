import React,{FC} from "react";
import g from "./CommonSocial.module.css"
import github from "../../../../../assets/Profile/github.svg"

type PropsType = {
    gh: string
}

const GitHub: FC<PropsType> = ({gh}) => {
    return (
        <div className={g.contacts__container}>
            <ul className={g.contacts__row}>
                <li className={g.contacts__img}><img src={github} alt="Something gone wrong"/></li>
                <li className={g.contacts__txt}>GitHub:</li>
                <li className={g.contacts__data}><a href={gh}>{gh}</a></li>
            </ul>
        </div>
    )
}
export default GitHub