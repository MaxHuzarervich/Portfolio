import React from 'react';
import style from './MyWorks.module.css'
import Work from "./work/Work";

function MyWorks() {
    return (
        <div className={style.worksBlock}>
            <div className={style.worksContainer}>
                <div className={style.titleBlock}><h2 className={style.title}>Мои работы</h2></div>
                <div className={style.works}>
                    <Work title={'Todo list'} description={'Описание Описание Описание Описание Описание'}/>
                    <Work title={'Todo list'} description={'Описание Описание Описание Описание Описание'}/>
                    <Work title={'Todo list'} description={'Описание Описание Описание Описание Описание'}/>
                    <Work title={'Todo list'} description={'Описание Описание Описание Описание Описание'}/>
                    <Work title={'Todo list'} description={'Описание Описание Описание Описание Описание'}/>
                    <Work title={'Todo list'} description={'Описание Описание Описание Описание Описание'}/>
                </div>
            </div>
        </div>
    )
}

export default MyWorks;