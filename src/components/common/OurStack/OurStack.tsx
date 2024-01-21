import React, { FC, useState } from "react";
import { ReactSVG } from "react-svg";
import { useStaticQuery, graphql, Link, navigate } from "gatsby";

import "./OurStack.sass";
import classNames from "classnames";

type StackItem = {
  title: string;
  description: string;
  imageBg: {
    publicURL: any;
  };
};
const OurStackComponent: FC = () => {
  const {
    allStacks: { nodes },
  } = useStaticQuery(graphql`
    query {
      allStacks {
        nodes {
          title
          description
          imageBg {
            publicURL
          }
        }
      }
    }
  `);

  const [expanded, setExpanded] = React.useState<string | boolean>("link0");

  const RenderItems = nodes.map((item: StackItem, idx: number) => {
    return (
      <div
        className={classNames("our-stack-inner__item", {
          ["isHovered"]:
            (expanded === `link${idx}` ? true : false) ||
            (expanded === false && idx === 0),
        })}
        key={idx}
        onMouseOver={() => setExpanded(`link${idx}`)}
        onMouseOut={() => setExpanded(false)}
      >
        <div className="our-stack-inner__item-img">
          <div className="page-svg">
            <ReactSVG src={item.imageBg.publicURL} />
          </div>
        </div>
        <div className="our-stack-inner__item-text">
          <p className="page-text">
            <span className="page_bold">{item.title} </span>используется
            разработчиками для создания бесшовной сплоченности при разработке
            кроссплатформенных мобильных приложений.
          </p>
        </div>
      </div>
    );
  });

  return (
    <section className="our-stack" id="ourStack">
      <div className="wrapper">
        <div className="our-stack-inner">
          <div className="page-title page-title-h1">
            Технологии <br /> которыми владеем
          </div>
          <div className="our-stack-inner__items">{RenderItems}</div>
        </div>
      </div>
    </section>
  );
};
export { OurStackComponent };
