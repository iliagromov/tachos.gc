import React, { FC, createRef, useCallback, useEffect, useReducer, useRef, useState } from 'react';
import cn from 'classnames';
// import { ReactSVG } from 'react-svg';
// import { useStaticQuery, graphql, Link, navigate } from "gatsby";

import './DebugGrid.sass';

type DebugGridComponentProps = {
    isVisible: boolean
}

const DebugGridComponent: FC<DebugGridComponentProps> = ({ isVisible = false }) => {

    const [debugGridIsOpen, setDebugGrid] = useState(false);

    const debugBtnGrid = debugGridIsOpen ? 'debugGrid-btn__remove' : 'debugGrid-btn__create';
    const debugGridIsOpenClass = debugGridIsOpen ? '' : 'debugGrid__hidden';
    // TODO: Сделать генерацию сетки
    // const measuredRef = useRef<HTMLElement>(null);

    // let debug = 'debug';
    // function divCreating(param, cls?) {
    //     var debugGrid = document.querySelector(param);
    //     let divCreate = document.createElement('div');
    //     cls ? divCreate.classList.add(cls) : divCreate.classList.add('wrapper');
    //     debugGrid.appendChild(divCreate);

    //     let params = '.debugGrid div';
    //     let debugGridDivAll = document.querySelectorAll(params);
    //     if (debugGridDivAll.length <= 1) {
    //         divCreating(params, "parentFlex");
    //     }

    //     if (debugGridDivAll.length >= 2 && debugGridDivAll.length <= 13) {
    //         let params = '.debugGrid div div';
    //         let debugGrid = document.querySelectorAll(params);
    //         // FIXME: ГЕНЕРИРОВАТЬ В СООТВЕТСВИИ С НАСТРОЙКОЙ
    //         if (debugGrid.length <= 12) {
    //             divCreating(params, "childFlex");
    //         }
    //     }
    // }

    // function debugGridCreate() {
    //     divCreating('.debugGrid');
    // }

    const createDebugGrid = () => {
        return (
            <div>
                test
            </div>
        )
    }

    const onGrid = () => {
        setDebugGrid(!debugGridIsOpen);
        // createDebugGrid();
    }

    return (
        <>
            {isVisible && (
                <>
                    <button className={cn('debugGrid-btn', debugBtnGrid)} onClick={onGrid}>
                    </button>

                    <div className={cn('debugGrid', 'debugGrid__z-index-negative', debugGridIsOpenClass)} >
                        <div className="wrapper">
                            <div className="parentFlex">
                                <div className="childFlex"></div>
                                <div className="childFlex"></div>
                                <div className="childFlex"></div>
                                <div className="childFlex"></div>
                                <div className="childFlex"></div>
                                <div className="childFlex"></div>
                                <div className="childFlex"></div>
                                <div className="childFlex"></div>
                                <div className="childFlex"></div>
                                <div className="childFlex"></div>
                                <div className="childFlex"></div>
                                <div className="childFlex"></div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}


export { DebugGridComponent };

