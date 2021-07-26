import React from "react";
import style from "./Work.module.css"

function Work(props) {
    return (
        <div className={style.workBlock}>
            <div className={style.image}>
                <div className={style.block}>Смотреть</div>
            </div>
            <div className={style.text}>
                <div className={style.title}>{props.title}</div>
                <div className={style.description}>{props.description}</div>
            </div>
        </div>
    )
}

export default Work;