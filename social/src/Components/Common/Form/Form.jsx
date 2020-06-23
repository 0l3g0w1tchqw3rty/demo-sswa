import React from "react";
import styles from "./Form.module.css"


const FormControl =(props)=>{
    const ERROR = props.meta.touched && props.meta.error;
    return(
        <div className={styles.main__area + " " + (ERROR ? styles.error : " ")}>
            {props.children}
            {ERROR && <span>{props.meta.error}</span>}
        </div>
    )
}

export let TextArea = (props) => {
    const {input,meta,child,...restProps} = props
    return (
        <FormControl {...props}> <textarea  {...input} {...restProps} /> </FormControl>
    )
}

export let LoginInput = (props) => {
    const {input,meta,child,...restProps} = props
    return (
        <FormControl {...props}> <input  {...input} {...restProps} /> </FormControl>
    )
}
