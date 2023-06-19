import React, { FC } from 'react';

import { useCookies } from 'react-cookie'

import './Cookies.sass';
const COOKIE_KEY = 'notification';

const CookiesComponent: FC = () => {
    const [cookies, setCookie] = useCookies();

    // если кука есть, то просто не рендерим кнопку
    if (cookies[COOKIE_KEY]) {
        return null;
    }
    
    
    return (

         <section className="cookies" >
            <div className="wrapper">
                <div className="cookies-inner">
                        <div className="page-text">
                            Пользуясь нашим сайтом, вы соглашаетесь с тем, что мы используем cookies
                        </div>
                        <button
                            className={'cookies-trigger'}
                            type="button"
                            onClick={() => setCookie(COOKIE_KEY, true)}
                        >
                            <span>
                                {'Окей'}
                            </span>
                        </button>
                </div>
            </div>
        </section>

    );
}


export { CookiesComponent };

