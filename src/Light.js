import React from "react";

export default ({lit, color}) => {
    const classNames = ['light', color];
    if (lit) {
        classNames.push('lit');
    }
    return (
        <div className={classNames.join(' ')}/>
    )
};
