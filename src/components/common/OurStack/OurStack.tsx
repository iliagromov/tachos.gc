import React, { FC } from "react";
import { ReactSVG } from "react-svg";
import { useStaticQuery, graphql, Link, navigate } from "gatsby";

import "./OurStack.sass";

type StackItem = {
  title: string;
  description: string;
  imageBg: {
    publicURL: any;
  };
};
const OurStackComponent: FC = () => {
  // FIXME: сделать фабрику по созданию картинок
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

  const RenderItems = nodes.map((item: StackItem, idx: number) => {
    return (
      <div className="our-stack-inner__item" key={idx}>
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
    <section className="our-stack" id="third">
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
