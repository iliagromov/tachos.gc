import React, { FC, useRef, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Navigation, Pagination } from "swiper";

// style
import './SwiperSlider.sass';
import { SwiperToggles } from './SwiperToggles';
import { SwiperSlideComponent } from './SwiperSlide';
import { getImage } from 'gatsby-plugin-image';
import PlayerControlExample from '../Player/Player';
import CustomPlayer from '../Player/Player';



const SwiperSliderComponent: FC = () => {
    
    const { 
        allMarkdownRemark: {
            nodes
        },
    } =  useStaticQuery(graphql`
        query  {
            allMarkdownRemark(
                sort: {frontmatter: {url: ASC}}
                filter: {frontmatter: {category: {eq: "testimonial"}}}
            ) {
                nodes {
                id
                frontmatter {
                    title
                    subtitle
                    description
                    image {
                        childImageSharp {
                            gatsbyImageData(formats: AUTO, placeholder: BLURRED)
                        }
                    }
                    video {
                        id
                        absolutePath
                        publicURL
                        childVideoFfmpeg {
                            transcode {
                                width
                                src
                                presentationMaxWidth
                                presentationMaxHeight
                                originalName
                                height
                                fileExtension
                                aspectRatio
                            }
                        }
                    }
                }
                }
            }
        }`);     
 
    const renderTestimonial = nodes?.map((node: any, i: number) => {
        const testimonial = node.frontmatter;
        const image = getImage(testimonial.image.childImageSharp.gatsbyImageData);
        const video = testimonial.video.publicURL;
        
        return(
            <SwiperSlide 
            className='testimonials-slide'  
            key={`testimonial__${i}`} >
                <SwiperSlideComponent
                            testimonial={testimonial}
                            video={video}
                            image={image}
                        />
            </SwiperSlide>
            
            
        )
    });

   
    return (
        <div className="testimonials-slider">
            <Swiper
                navigation={false}
                modules={[Navigation, Pagination]}
                spaceBetween={0}
                slidesPerView={1}
                initialSlide={1}
               
                
                className="testimonialSwiper" >
                <SwiperToggles />
                <div className="testimonials-slider__items swiper-wrapper">
                    {renderTestimonial} 
                </div>
            </Swiper>
        </div>

    );
}


export { SwiperSliderComponent };





// video1: file(relativePath: {eq: "video-testimonial.mp4"}) {
//     relativePath
//     name
//     id
//     publicURL
//     childVideoFfmpeg {
//         transcode {
//             width
//             src
//             presentationMaxWidth
//             presentationMaxHeight
//             originalName
//             height
//             fileExtension
//             aspectRatio
//         }
//     }
// }