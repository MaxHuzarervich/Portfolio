import React from "react";
import style from "./Work.module.css"

function Work(props) {
    return (
        <div className={style.work}>
            <div className={style.image}>
                <div className={style.block}>Смотреть</div>
            </div>
            <div>
                <h3>{props.title}</h3>
                <span className={style.span}>{props.description}</span>
            </div>
        </div>
    )
}

export default Work;