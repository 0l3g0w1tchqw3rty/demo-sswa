import React from "react";

export const required = (values) => {
    if (values) {
        return undefined;
    }
    return 'Required field';
}

export const MaxLengthVal = (maxLength) => (values)=> {
    if (values.length > maxLength) return <p>Max length is {maxLength} symbols</p>;
    return undefined;
    }



