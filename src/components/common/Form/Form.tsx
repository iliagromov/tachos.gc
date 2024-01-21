import React, { FC } from "react";
import { Script } from "gatsby";
import "./Form.sass";

const Form: FC = () => {
  return (
    <Script
      id="b24form"
      data-b24-form="inline/11/afo0cp"
      data-skip-moving="true"
      dangerouslySetInnerHTML={{
        __html: `(function(w,d,u){var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/180000|0);var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);})(window,document,'https://cdn-ru.bitrix24.ru/b25076856/crm/form/loader_11.js');`,
      }}
    ></Script>
  );
};

export { Form };
