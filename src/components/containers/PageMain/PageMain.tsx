import * as React from "react";
import { PageProps } from "gatsby";
import { OurStackComponent } from "../../common/OurStack/OurStack";
import { BannerComponent } from "../../common/BannerMain/BannerMain";
import { Projects2 } from "../../common/Projects2/Projects2";

const PageMainContainer: React.FC<PageProps> = (props) => {
  return (
    <>
      <BannerComponent />
      <OurStackComponent />
      <Projects2 />
    </>
  );
};
export { PageMainContainer };
