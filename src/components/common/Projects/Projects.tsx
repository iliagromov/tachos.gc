import React, { FC } from 'react';
import { useStaticQuery, graphql } from "gatsby";
import { ProjectItem, ProjectItemProps } from './ProjectItem';

import './Projects.sass';

type ProjectsItemProps = QueryProjectItemProps[];
type QueryProjectItemProps = {
    id: string
    frontmatter: ProjectItemProps
}

const ProjectsComponent: FC = () => {
    
    const {
        allMarkdownRemark: {
            nodes
        }
    } : {
        allMarkdownRemark: { 
            nodes: ProjectsItemProps
        }
    } = useStaticQuery(graphql`
        query  {
            allMarkdownRemark(
                sort: {frontmatter: {url: ASC}}
                filter: {frontmatter: {category: {eq: "projects"}}}
            ) {
                nodes {
                    id
                    frontmatter {
                        category
                        url
                        image {
                            childImageSharp {
                                gatsbyImageData(
                                  formats:AUTO
                                  placeholder:BLURRED
                                )
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
                        date
                        title
                        subtitle
                        description
                    }
                }
            }
    }`);
    const renderProjects = nodes?.map((node: QueryProjectItemProps, i: number) => {
        const project = node.frontmatter;
       
        return (
            <ProjectItem
                key={`project__${i}`}
                video={project.video}
                category={project.category}
                url={project.url}
                image={project.image}
                date={project.date}
                title={project.title}
                subtitle={project.subtitle}
                description={project.description}
            />
        )
    });

    return (
        <section className="projects">

            <div className="wrapper">
                <div className="projects-inner">
                    {renderProjects}
                </div>
            </div>
        </section>

    );
}
export { ProjectsComponent };