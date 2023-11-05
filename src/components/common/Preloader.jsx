import React from 'react';
import preloader from '../../assets/images/preloader.gif'
import style from './Preloader.module.css'

const Preloader = () => {
    return (
        <div className={style.preloaderContainer}>
            <img className={style.preloader} src={preloader} alt="preloader" />
        </div>
    );
};

export default Preloader;