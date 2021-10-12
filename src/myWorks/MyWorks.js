import React from 'react';
import style from './../common/styles/Block.module.css'
import Work from "./work/Work";
import styleContainer from "../common/styles/Container.module.css";
import Title from "../common/components/title/Title";

function MyWorks() {
    return (
        <div className={style.bigBlockWorks}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <Title text={'Проекты'}/>
                <div className={style.littleBlock}>
                    <Work title={'Todo list'}
                          description={' Описание Описание Описание Описание Описание Описание Описание Описание Описание '}/>
                    <Work title={'Social Network'}
                          description={'Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание '}/>
                </div>
            </div>
        </div>
    )
}

export default MyWorks;