import React, { FC, useState } from "react";
import { useStaticQuery, graphql } from "gatsby";

import "./Projects2.sass";
import { ReactSVG } from "react-svg";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import classNames from "classnames";

type ProjectsItem = {
  title: string;
  subtitle: string;
  image: {
    childImageSharp: {
      gatsbyImageData: any;
    };
  };
  image2: {
    childImageSharp: {
      gatsbyImageData: any;
    };
  };
  description: string;
  articleLinks: {
    href: string;
    text: string;
    title: string;
  }[];
  appstore: string;
  googleplay: string;
  aboutStack: string;
};

const Projects2: FC = () => {
  const {
    allProjects: { nodes },
    iconAppStore,
    iconGooglePlay,
    arrows,
  }: {
    allProjects: {
      nodes: ProjectsItem[];
    };
    iconAppStore: any;
    iconGooglePlay: any;
  } = useStaticQuery(graphql`
    query {
      arrows: file(relativePath: { eq: "arrows.svg" }) {
        publicURL
        name
      }
      iconAppStore: file(relativePath: { eq: "ic-appstore.svg" }) {
        publicURL
        name
      }
      iconGooglePlay: file(relativePath: { eq: "ic-googleplay.svg" }) {
        publicURL
        name
      }
      allProjects {
        nodes {
          title
          subtitle
          image {
            childImageSharp {
              gatsbyImageData(
                formats: AUTO
                layout: FIXED
                placeholder: BLURRED
              )
            }
          }
          image2 {
            childImageSharp {
              gatsbyImageData(
                formats: AUTO
                layout: FULL_WIDTH
                placeholder: BLURRED
              )
            }
          }
          description

          articleLinks {
            href
            text
            title
          }
          appstore
          googleplay
          aboutStack
        }
      }
    }
  `);

  const [expanded, setExpanded] = React.useState<string>("link0");
  const handleChange = (panel: string) => () => {
    setExpanded(expanded === panel ? false : panel);
  };

  const renderProjects = nodes?.map((node: ProjectsItem, idx: number) => {
    console.log("🚀 ~ renderProjects ~ node:", node);
    const imgIcon = getImage(node.image);
    const imgBg = getImage(node.image2);

    return (
      <div key={idx} className="item-apps">
        <div className="item-apps__bg">
          <GatsbyImage image={imgBg} alt={node.title} />
        </div>
        <div className="item-apps__content">
          <div className="item-apps__text">
            <div className="item-apps__icon">
              <GatsbyImage image={imgIcon} alt={node.title} />
            </div>
            <div className="item-apps__text-box">
              <div className="item-apps__title">{node.title}</div>
              <div className="item-apps__descr">{node.subtitle}</div>
            </div>
          </div>
          <div className="item-apps__stack">
            <div className="item-apps__stack-title">Стек технологий:</div>
            <div className="item-apps__stack-text">{node.aboutStack}</div>
          </div>
          <div className="item-apps__add-links">
            <div className="item-apps__add-links-title">О проекте пишут:</div>
            <ul className="item-apps__add-links-list">
              {node.articleLinks.map((link, i) => {
                return (
                  <li key={i}>
                    {link.title}
                    <a
                      className="item-apps__add-link"
                      href={link.href}
                      target="_blank"
                    >
                      {link.text}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="item-apps__show-more">
            <div
              className={classNames("page-link", {
                ["js-open"]: expanded === `link${idx}`,
              })}
              onClick={handleChange(`link${idx}`)}
            >
              Подробнее{" "}
              <ReactSVG className={"page-svg"} src={arrows.publicURL} />
            </div>
          </div>
        </div>
        <div className="item-apps__links">
          <div className="item-apps__links-list">
            <a className="item-apps__link" href={node.appstore} target="blank">
              <ReactSVG src={iconAppStore.publicURL} />
            </a>
            <a
              className="item-apps__link"
              href={node.googleplay}
              target="blank"
            >
              <ReactSVG src={iconGooglePlay.publicURL} />
            </a>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section className="projects">
      <div className="wrapper">
        <div className="page-title page-title-h1">Наши проекты</div>
        <div className="apps__list">{renderProjects}</div>
      </div>
    </section>
  );
};
export { Projects2 };
