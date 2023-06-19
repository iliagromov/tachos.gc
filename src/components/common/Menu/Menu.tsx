import React, { FC, useCallback, useState } from 'react';
import cn from 'classnames'

import './Menu.sass';

const MenuComponent: FC = () => {
    
    const [stateMenu, setState] = useState(false);


    const setMenuVisibility = (value: boolean) => {
        setState(value)
    }

    /**
     * Возвращает ширину скроллбара в браузере
     *
     * @return  {number}  ширина скроллбара
     */
    const getScrollbarSize = () => {
        let scrollbarSize = void 0
        if (scrollbarSize === undefined) {
        const scrollDiv = document.createElement('div')
        scrollDiv.style.cssText =
            'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;'
        document.body.appendChild(scrollDiv)
        scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth
        document.body.removeChild(scrollDiv)
        }

        return scrollbarSize
    }


    /**
     * Переключение скролла на странице с уетом текущего размера скроллбара
     * чтобы не происходило подергивание
     *
     * @param {boolean} isFixed  скролл убран
     */
    const toggleBodyScroll = (isFixed: boolean) => {
        const body = document.body
        const hasScroll = document.body.offsetHeight > window.innerHeight
    
        if (isFixed) {
        if (hasScroll) {
            const scrollBarSize = getScrollbarSize()
            body.style.marginRight = scrollBarSize + 'px'
        }
        body.style.overflow = 'hidden'
        } else {
        body.removeAttribute('style')
        }
    }

    const toggleBodyNavShowed = (isShowed: boolean) => {
        const body = document.body
        toggleBodyScroll(isShowed)
    
        if (isShowed) {
        body.classList.add('nav-showed')
        } else {
        body.classList.remove('nav-showed')
        }
    }


    return (

        <nav className={cn('nav', stateMenu && 'navShowed')} >
            <ul className={'nav-list'}>
            <li>1</li>
            </ul>
        </nav>

    );
}


export { MenuComponent };

