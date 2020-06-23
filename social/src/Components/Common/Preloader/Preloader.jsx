import fetching from "../../../assets/common/Preloader.gif";
import React from "react";
import p from "./Preloader.module.css"


let Preloader =()=>{
    return(
        <div className={p.preloader__container}>
            <img src={fetching} alt="Getting Data" className={p.fetching}/>
        </div>
    )
}
export default Preloader;