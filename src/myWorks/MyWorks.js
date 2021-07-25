import React from 'react';
import style from './MyWorks.module.css'
import Work from "./work/Work";

function MyWorks() {
    return (
        <div className={style.worksBlock}>
            <div className={style.worksContainer}>
                <div className={style.blockTitle}>
                    <div className={style.title}><h2>Мои работы</h2></div>
                </div>
                <div className={style.works}>
                    <Work title={'Todolist'} description={'Описание будет здесь.'}/>
                    <Work title={'Social Network'} description={'Описание будет здесь.'}/>
                    <Work title={'Social Network'} description={'Описание будет здесь.'}/>
                    <Work title={'Social Network'} description={'Описание будет здесь.'}/>
                    <Work title={'Social Network'} description={'Описание будет здесь.'}/>
                </div>
            </div>
        </div>
    )
}

export default MyWorks;