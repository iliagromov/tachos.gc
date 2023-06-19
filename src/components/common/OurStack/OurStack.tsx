import React, { FC } from 'react';
import { ReactSVG } from 'react-svg';
import { useStaticQuery, graphql, Link, navigate } from "gatsby";

import './OurStack.sass';

const OurStackComponent: FC = () => {
    // FIXME: сделать фабрику по созданию картинок
    const {
        technology1,
        technology2,
        technology3,
        technology4,
        technology5,
        technology6,
        technology7,
        technology8,
    } = useStaticQuery(graphql`
        query  {
            technology1: file(relativePath: { eq: "technology-1.svg" }) {
              publicURL
              name
            }
            technology2: file(relativePath: { eq: "technology-2.svg" }) {
              publicURL
              name
            }
            technology3: file(relativePath: { eq: "technology-3.svg" }) {
              publicURL
              name
            }
            technology4: file(relativePath: { eq: "technology-4.svg" }) {
              publicURL
              name
            }
            technology5: file(relativePath: { eq: "technology-5.svg" }) {
              publicURL
              name
            }
            technology6: file(relativePath: { eq: "technology-6.svg" }) {
              publicURL
              name
            }
            technology7: file(relativePath: { eq: "technology-7.svg" }) {
              publicURL
              name
            }
            technology8: file(relativePath: { eq: "technology-8.svg" }) {
              publicURL
              name
            }
        }`);

    return (

        <section className="our-stack"  id="third">
            <div className="wrapper">
                <div className="our-stack-inner">
                    <div className="page-title page-title-h1">Технологии <br/> которыми владеем</div>
                    <div className="our-stack-inner__items">
                        <div className="our-stack-inner__item">
                            <div className="our-stack-inner__item-img">
                                <div className="page-svg"> 
                                    <ReactSVG src={technology1.publicURL} />
                                </div>
                            </div>
                            <div className="our-stack-inner__item-text">
                                <p className="page-text"><span className="page_bold">Flutter </span>используется разработчиками
                                    для создания бесшовной сплоченности при разработке кроссплатформенных мобильных
                                    приложений.</p>
                            </div>
                        </div>
                        <div className="our-stack-inner__item">
                            <div className="our-stack-inner__item-img">
                                <div className="page-svg"> 
                                <ReactSVG src={technology2.publicURL} />
                                </div>
                            </div>
                            <div className="our-stack-inner__item-text">
                                <p className="page-text"><span className="page_bold">Flutter </span>используется разработчиками
                                    для создания бесшовной сплоченности при разработке кроссплатформенных мобильных
                                    приложений.</p>
                            </div>
                        </div>
                        <div className="our-stack-inner__item">
                            <div className="our-stack-inner__item-img">
                                <div className="page-svg"> 
                                <ReactSVG src={technology3.publicURL} />
                                </div>
                            </div>
                            <div className="our-stack-inner__item-text">
                                <p className="page-text"><span className="page_bold">Flutter </span>используется разработчиками
                                    для создания бесшовной сплоченности при разработке кроссплатформенных мобильных
                                    приложений.</p>
                            </div>
                        </div>
                        <div className="our-stack-inner__item">
                            <div className="our-stack-inner__item-img">
                                <div className="page-svg"> 
                                <ReactSVG src={technology4.publicURL} />
                                </div>
                            </div>
                            <div className="our-stack-inner__item-text">
                                <p className="page-text"><span className="page_bold">Flutter </span>используется разработчиками
                                    для создания бесшовной сплоченности при разработке кроссплатформенных мобильных
                                    приложений.</p>
                            </div>
                        </div>
                        <div className="our-stack-inner__item">
                            <div className="our-stack-inner__item-img">
                                <div className="page-svg"> 
                                <ReactSVG src={technology5.publicURL} />
                                </div>
                            </div>
                            <div className="our-stack-inner__item-text">
                                <p className="page-text"><span className="page_bold">Flutter </span>используется разработчиками
                                    для создания бесшовной сплоченности при разработке кроссплатформенных мобильных
                                    приложений.</p>
                            </div>
                        </div>
                        <div className="our-stack-inner__item">
                            <div className="our-stack-inner__item-img">
                                <div className="page-svg"> 
                                <ReactSVG src={technology6.publicURL} />
                                </div>
                            </div>
                            <div className="our-stack-inner__item-text">
                                <p className="page-text"><span className="page_bold">Flutter </span>используется разработчиками
                                    для создания бесшовной сплоченности при разработке кроссплатформенных мобильных
                                    приложений.</p>
                            </div>
                        </div>
                        <div className="our-stack-inner__item">
                            <div className="our-stack-inner__item-img">
                                <div className="page-svg"> 
                                <ReactSVG src={technology7.publicURL} />
                                </div>
                            </div>
                            <div className="our-stack-inner__item-text">
                                <p className="page-text"><span className="page_bold">Flutter </span>используется разработчиками
                                    для создания бесшовной сплоченности при разработке кроссплатформенных мобильных
                                    приложений.</p>
                            </div>
                        </div>
                        <div className="our-stack-inner__item">
                            <div className="our-stack-inner__item-img">
                                <div className="page-svg"> 
                                <ReactSVG src={technology8.publicURL} />
                                </div>
                            </div>
                            <div className="our-stack-inner__item-text">
                                <p className="page-text"><span className="page_bold">Flutter </span>используется разработчиками
                                    для создания бесшовной сплоченности при разработке кроссплатформенных мобильных
                                    приложений.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}
export { OurStackComponent };