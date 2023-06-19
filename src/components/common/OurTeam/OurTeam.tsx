import React, { FC } from 'react';

import {  StaticImage } from "gatsby-plugin-image"

import './OurTeam.sass';

const OurTeamComponent: FC = () => {
 
    return (
        <section className="our-team">
            <div className="wrapper">
                <div className="our-team-inner">
                    <div className="our-team-inner_bg-bottom"></div>
                    <div className="page-title page-title-h1">Здесь работают <br /> лучшие специалисты</div>
                    <div className="our-team__info">
                        <div className="our-team__img">
                            <StaticImage src={'../../../assets/images/png/image-team.png'} alt={'img'} />
                        </div>
                        <div className="our-team__some-text">
                            <div className="page-title-caption page-title-caption-2">Frontend Developer</div>
                            <div className="page-title-caption page-title-caption-2">iOS Developer</div>
                            <div className="page-title-caption page-title-caption-2">Project Manager</div>
                            <div className="page-title-caption page-title-caption-2">QA</div>
                            <div className="page-title-caption page-title-caption-2">Android Developer</div>
                            <div className="page-title-caption page-title-caption-2">QA Engineer</div>
                            <div className="page-title-caption page-title-caption-2">Backend Developer</div>
                            <div className="page-title-caption page-title-caption-2">Analitics</div>
                            <div className="page-title-caption page-title-caption-2">Mobole Developer</div>
                            <div className="page-title-caption page-title-caption-2">DevOps</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export { OurTeamComponent };