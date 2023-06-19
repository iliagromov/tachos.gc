import React, { FC } from 'react';

// import { ReactSVG } from 'react-svg';
// import { useStaticQuery, graphql, Link, navigate } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import './Testimonials.sass';


export type TestimonialItemProps = {
}

const TestimonialItem: FC<TestimonialItemProps> = (props) => {


    return (

        <div className="testimonials-slide swiper-slide">
            <div className="testimonials-slide__img testimonials-slide__img_mask">
                <div className="testimonials-slide__img-poster">
                    
                </div>
                <div className="testimonials-slide__img-video">
                   

                    <div className="testimonials-slide__img-video-btn-play">
                        <div id="timer"></div><button className="page-btn" aria-label="Play"
                            role="button">►</button>
                    </div>
                </div>
            </div>
            <div className="testimonials-slide__name">
                <h3 className="page-title page-title-h3">Дима Энтелис</h3>
                <div className="page-title-caption page-title-caption-3">CTO Entelis team</div>
            </div>
        </div>
    );
}


export { TestimonialItem };

