import React from "react";
import i from "./Info.module.css"
import Id from "./Id/Id";
import Photo from "./Photo/Photo";
import Name from "./Name/Name";
import Status from "./Status/Status";
import Job from "./Job/Job";

const Info = ({job,jobStatus,settingStatus, status, id, owner, photo, name}) => {
    return (
        <section className={i.main__info}>
            <Job job={job} jobstatus={jobStatus}/>
            <Status owner={owner} settingStatus={settingStatus} status={status}/>
            <Id id={id}/>
            <Photo  photo={photo}/>
            <Name name={name}/>
        </section>
    )
}
export default Info;
