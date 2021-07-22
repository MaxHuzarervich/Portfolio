import React from "react";
import style from './Work.module.css'

function Work(props) {
    return (
        <div className={style.work}>
            <div className={style.icon}>
                <div className={style.block}>Смотреть</div>
            </div>
            <div className={style.text}>
                <div className={style.title}>{props.title}</div>
                <div className={style.title}>{props.description}</div>
            </div>
        </div>
    )
}

export default Work;