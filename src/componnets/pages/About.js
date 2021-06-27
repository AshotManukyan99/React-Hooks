import React, {useState} from "react";
import Count from "../Count/Count";
import CountUseEffect from "../Count/CountUseEffect";
import {useTranslation} from "react-i18next";

export default function About() {
    const {t, i18n} = useTranslation();

    const handlerChangeLanguage = (locale) => {
        console.log(locale)
        i18n.changeLanguage(locale)
    }

    return (
        <>
            <div>
                <button onClick={() => handlerChangeLanguage('en')}>EN</button>
                <button onClick={() => handlerChangeLanguage('ru')}>RU</button>
                <button onClick={() => handlerChangeLanguage('am')}>AM</button>
                <p> {t('Welcome to React')} </p>
            </div>


            <div className="jumbotron jumbotron-fluid  ">
                <div className="container">
                    <h1 className="display-4">Information</h1>
                    <p className="lead"> Version app <strong> 1.0.0 </strong></p>
                </div>
            </div>
            {/*<div className='m-5 border-secondary '>*/}
            {/*    <Count/>*/}
            {/*</div>*/}

        </>
    )

}
