import React, { FC } from 'react';

import './Banner.sass';

const BannerComponent: FC = () => {
 

  return (
    <section className="banner" id="first">
      <div className="wrapper">
        <div className="banner-inner">
          <div className="banner__description-text">
            <h1 className="page-title page-title-h1">Студия по разработке мобильных приложениях
              делающая сложный </h1>
          </div>
          <div className="banner__description">
            <div className="banner__description-subtitle">
              <div className="page-title-caption page-title-caption-1">FrontEnd & Backend</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export { BannerComponent }