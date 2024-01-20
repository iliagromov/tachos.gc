import React, { FC } from "react";

import "./Footer.sass";

type FooterProps = {};

const FooterComponent: FC<FooterProps> = () => {
  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="footer__contacts">
          <div className="footer__contacts_req">
            ООО “Тачос”
            <br />
            ОГРН 1133443024032
            <br />
            ИНН 3460009833
            <br />
            КПП 344401001
            <br />
            Дата регистрации 03.09.2013
            <br />
            Основной вид деятельности - ОКВЭД 62.01
          </div>
          <div className="footer__contacts_address">
            400131, г. Волгоград, наб. 62-й Армии, д. 6
            <br />
            <a href="tel:79880023545">+7 988 002 3545</a>
            <br />
            <a href="mailto:vadim@tachos.ru">vadim@tachos.ru</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export { FooterComponent };
