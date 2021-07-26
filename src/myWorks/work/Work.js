import React from "react";
import style from "./Work.module.css"

function Work(props) {
    return (
        <div className={style.workBlock}>
            <div className={style.image}></div>
            <div>
            <h3>{props.title}</h3>
            <span>
                {props.description}
            </span>
            </div>
        </div>
    )
}

export default Work;