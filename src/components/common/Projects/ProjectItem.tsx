import React, { FC } from 'react';
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image"

import './Projects.sass';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { Player } from 'video-react';


export type ProjectItemProps = {
    category?: string
    url?: string
    image: {
        childImageSharp: {
            gatsbyImageData: any
        }
    }
    video?: string
    date: string
    title: string
    subtitle: string
    description: string
}

const ProjectItem: FC<ProjectItemProps> = (props) => {
    const {
        category,
        url,
        image,
        date,
        title,
        subtitle,
        description,
        video
    } = props;
    const projectLink = `/${category}/${url}`;
    // INFO: getImage использую там где делаю запрос childImageSharp
    // INFO: getImage в корневом компоненете, придется проходит вверх и смотреть что было в запросе
    const projectImage = getImage(image.childImageSharp.gatsbyImageData);
    // console.log(video);
    return (
        <>
        <Link className="project-card" to={projectLink}>
            <div className="project-card__img">
                <GatsbyImage
                image={projectImage}
                alt={'img'} />
            </div>
           
            <div className="project-card__text">
                <div className="project-card__title-box">
                    <div className="project-card__title">
                        <div className="page-title page-title-h2">{title}</div>
                        <div className="project-card__date">
                            <div className="page-title-caption-4">{date}</div>
                        </div>
                    </div>
                    <div className="project-card__subtitle">
                        <div className="page-title-caption page-title-caption-3">{subtitle}</div>
                    </div>
                </div>
                <div className="project-card__description">
                    <div className="page-text">{description}</div>
                </div>
            </div>
        </Link>
        </>

    );
}


export { ProjectItem };