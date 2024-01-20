import React, { FC } from "react";

import "./BannerMain.sass";

const BannerComponent: FC = () => {
  return (
    <section className="banner" id="first">
      <div className="wrapper">
        <div className="apps__description">
          <h1 className="js-animate apps__item apps__item_animation">
            Мы — <span>команда</span> аналитиков, программистов, тестировщиков и
            исследователей
          </h1>
          <p className="js-animate apps__item apps__item_animation">
            Разработка мобильных приложений для палтформ iOS, Andoid, Flutter и
            серверных приложений. Иструменты, которые используем каждый день:
            Swift, Kotlin, Dart, Python, Angular JS, Mixpanel и Datadog.
          </p>
        </div>
      </div>
    </section>
  );
};
export { BannerComponent };
