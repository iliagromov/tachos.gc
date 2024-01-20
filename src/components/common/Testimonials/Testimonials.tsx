import React, { FC, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { StaticImage } from "gatsby-plugin-image"
import { SwiperSliderComponent } from '../SwiperSlider/SwiperSlider';

import './Testimonials.sass';
import 'react-tabs/style/react-tabs.css';
const CustomTab = (props) => {
    return (
        <Tab>
            <h1 onMouseEnter={props.onHover}>{props.children}</h1>
        </Tab>
        );
    };
    
CustomTab.tabsRole = 'Tab';

const TestimonialsComponent: FC = () => {
    const [tabIndex, setTabIndex] = useState(0);
   
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
                        
                            <Tabs className="testimonials-steps">
                                <TabList className="testimonials-steps__nav">
                                    <Tab className="tab-link page-text ">Выстраиваем <br />процесс разработки </Tab>
                                    <Tab className="tab-link page-text">Проводим <br />технический аудит</Tab>
                                    <Tab className="tab-link page-text">Запускаем с нуля, <br />поддерживаем и развиваем</Tab>
                                    <Tab className="tab-link page-text">Консультируем как лушче <br />запустить продукт, фичу, на
                                        каких технологиях</Tab>
                                </TabList>
                            <div className="testimonials-steps__contents">
                               
                                <TabPanel className="testimonials-steps__content ">
                                    <StaticImage
                                     src={'../../../assets/images/png/testimonial-steps.png'} alt={'img'} />
                                </TabPanel>
                              
                                <TabPanel className="testimonials-steps__content ">
                                    <StaticImage
                                     src={'../../../assets/images/png/testimonial-steps-1.png'} alt={'img'} />
                                </TabPanel>
                                
                                <TabPanel className="testimonials-steps__content ">
                                    <StaticImage
                                     src={'../../../assets/images/png/testimonial-steps.png'} alt={'img'} />
                                </TabPanel>
                                
                                <TabPanel className="testimonials-steps__content ">
                                    <StaticImage
                                     src={'../../../assets/images/png/testimonial-steps-1.png'} alt={'img'} />
                                </TabPanel>

                                
                            </div>

                            </Tabs>
                    </div>
                </div>
            </div>
        </section>

    );
}
export { TestimonialsComponent };