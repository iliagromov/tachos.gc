import React, { FC } from 'react';
import { StaticImage } from "gatsby-plugin-image"

import './Testimonials.sass';
import { SwiperSliderComponent } from '../SwiperSlider/SwiperSlider';

const TestimonialsComponent: FC = () => {

   
    return (
        <section className="testimonials">

            
            <div className="wrapper">
                <div className="testimonials-inner">
                    <div className="page-title page-title-h1">Отзывы</div>
                    <SwiperSliderComponent/>
                    
                    <div className="testimonials__steps">
                        <div className="testimonials__steps-title">
                            <div className="page-title page-title-h1">Cоздаем решения, которые определяют и изменяют мир
                                вокруг нас прямо здесь и сейчаc</div>
                            <div className="testimonials__steps-title_marker-after">

                            </div>
                        </div>
                        <div className="testimonials-steps">
                            <div className="testimonials-steps__nav">
                                <div className="tab-link page-text isActive">Выстраиваем <br />процесс разработки </div>
                                <div className="tab-link page-text">Проводим <br />технический аудит</div>
                                <div className="tab-link page-text">Запускаем с нуля, <br />поддерживаем и развиваем</div>
                                <div className="tab-link page-text">Консультируем как лушче <br />запустить продукт, фичу, на
                                    каких технологиях</div>
                            </div>
                            <div className="testimonials-steps__contents">
                                <div className="testimonials-steps__content isActive">
                                    <StaticImage
                                     src={'../../../assets/images/png/testimonial-steps.png'} alt={'img'} />
                                </div>
                                <div className="testimonials-steps__content">
                                    <StaticImage
                                     src={'../../../assets/images/png/testimonial-steps.png'} alt={'img'} />
                                </div>
                                <div className="testimonials-steps__content">
                                    <StaticImage
                                     src={'../../../assets/images/png/testimonial-steps.png'} alt={'img'} />
                                </div>
                                <div className="testimonials-steps__content">
                                    <StaticImage
                                     src={'../../../assets/images/png/testimonial-steps.png'} alt={'img'} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}
export { TestimonialsComponent };