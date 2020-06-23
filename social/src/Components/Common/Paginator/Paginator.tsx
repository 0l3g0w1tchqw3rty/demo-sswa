import React, {useState} from "react"
import p from "./Paginator.module.css"
import left from "../../../assets/paginator/left-arrow.svg"
import right from "../../../assets/paginator/right-arrow .svg"


type PropsType = {
    totalItems: number
    pageSize: number
    settingCurrentPage: (pages: number) => void
    currentPage: number
    portionSize?: number
}

const Paginator: React.FC<PropsType> = ({
                                            totalItems,
                                            pageSize,
                                            settingCurrentPage,
                                            currentPage,
                                            portionSize = 10
                                        }) => {
    let itemsCount = Math.ceil(totalItems / pageSize)
    let pages: Array<number> = []
    for (let i = 1; i <= itemsCount; i++) {
        pages.push(i)
    }
    let portionCount = Math.ceil(itemsCount / portionSize)
    let [portionNumber, setPortion] = useState(1)
    let leftPortion = (portionNumber - 1) * portionSize + 1
    let rightPortion = portionNumber * portionSize


    return (
        <section className={p.main__count}>
            {portionNumber > 1
                ? <div className={p.left} onClick={() => setPortion(portionNumber - 1)}>
                    <img src={left} alt={"something gone wrong"}/>
                </div>
                : <div className={p.empty}></div>}
            <ul className={p.count__row}>
                {pages.filter(f => f >= leftPortion && f <= rightPortion)
                    .map(i => <li key={i} onClick={() => {
                        settingCurrentPage(i)
                    }} className={currentPage === i
                        ? p.row__active
                        : p.row__number}>{i}</li>)}
            </ul>
            {portionCount > portionNumber &&
            <div className={p.right} onClick={() => setPortion(portionNumber + 1)}>
                <img src={right} alt="something gone wrong"/>
            </div>}
        </section>
    )
}
export default Paginator