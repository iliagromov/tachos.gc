import * as React from "react";
import { Link, PageProps, useStaticQuery } from "gatsby";
import { graphql } from "gatsby";
import { ProjectItem } from "../../common/Projects/ProjectItem";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

// TODO: Сделать типы

const ProjectPageContainer: React.FC<PageProps> = ({ data }) => {
  const projectImage = getImage(data.image.childImageSharp.gatsbyImageData);
  
  return (
    <section className="project-page">
      <div className="wrapper">
        <div className="project-page-inner">
          <div className="project-card">
            <div className="project-card__img">
              <GatsbyImage
                image={projectImage}
                alt={'img'} />
            </div>
            <div className="project-card__text">
              <div className="project-card__title-box">
                <div className="project-card__title">
                  <div className="page-title page-title-h2">{data.title}</div>
                  <div className="project-card__date">
                    <div className="page-title-caption-4">{data.date}</div>
                  </div>
                </div>
                <div className="project-card__subtitle">
                  <div className="page-title-caption page-title-caption-3">{data.subtitle}</div>
                </div>
              </div>
              <div className="project-card__description">
                <div className="page-text">{data.description}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export { ProjectPageContainer };
