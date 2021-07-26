import React from "react";
import style from "./Work.module.css"

function Work(props) {
    return (
        <div className={style.workBlock}>
            <div className={style.image}>
                <div className={style.block}>Смотреть</div>
            </div>
            <div className={style.text}>
                <span>{props.title}</span><br/>
                <span>{props.description}</span>
            </div>
        </div>
    )
}

export default Work;