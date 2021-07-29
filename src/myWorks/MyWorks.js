import React from 'react';
import style from './MyWorks.module.css'
import Work from "./work/Work";
import styleContainer from "../common/styles/Container.module.css";

function MyWorks() {
    return (
        <div className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
                <h2 className={style.title}>Мои работы</h2>
                <div className={style.works}>
                    <Work title={'Todo list'} description={' Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание '}/>
                    <Work title={'Social Network'} description={'Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание '}/>
                </div>
            </div>
        </div>
    )
}

export default MyWorks;