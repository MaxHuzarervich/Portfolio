import React from "react";
import style from "./Work.module.css"

function Work(props) {
    return (
        <div className={style.workBlock}>
            <div className={style.image}></div>
            <h3>{props.title}</h3>
            <span>
                {props.description}
            </span>
        </div>
    )
}

export default Work;