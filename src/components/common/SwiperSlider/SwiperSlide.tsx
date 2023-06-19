import React, { FC,  } from 'react';


import { GatsbyImage } from 'gatsby-plugin-image';

// style
import './SwiperSlide.sass';
import CustomPlayer from '../Player/Player';
import { graphql, useStaticQuery } from 'gatsby';
import { useSwiper } from 'swiper/react';
type SwiperSlideComponentProps = {
    video: string
    image: any
    testimonial: AnyNsRecord

}
const SwiperSlideComponent: FC<SwiperSlideComponentProps> = ({
    video,
    image,
    testimonial
}) => {
     
    const { 
        iconPlay,
    } =  useStaticQuery(graphql`
        query  {
            iconPlay:  file(relativePath: { eq: "icon-play.svg" }) {
                publicURL
			    name
            }
        }`);  
    // const selfSwiper = useSwiper();
    // console.log(selfSwiper);

    return (
            <>
                <div className="testimonials-slide__img testimonials-slide__img_mask">
                    <div className="testimonials-slide__img-poster">
                        <GatsbyImage image={image} alt={'img'} />
                    </div>
                    <div className="testimonials-slide__img-video">
                            <CustomPlayer 
                            video={video}
                            iconBtn={iconPlay.publicURL}
                        />
                        
                    </div>
                </div>
                <div className="testimonials-slide__name">
                    <h3 className="page-title page-title-h3">{testimonial.title}</h3>
                    <div className="page-title-caption page-title-caption-3">{testimonial.subtitle}</div>
                </div>
            </>

    );
}


export { SwiperSlideComponent };

