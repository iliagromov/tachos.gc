import * as React from "react";
import { Link, PageProps, useStaticQuery } from "gatsby";
import { graphql } from "gatsby";
import { BannerComponent } from "../../common/Banner/Banner";
import { ProjectsComponent } from "../../common/Projects/Projects";
import { TestimonialsComponent } from "../../common/Testimonials/Testimonials";
import { OurStackComponent } from "../../common/OurStack/OurStack";
import { OurTeamComponent } from "../../common/OurTeam/OurTeam";

const PageMainContainer: React.FC<PageProps> = (props) => {


  return (
    <>
      <BannerComponent />
      <ProjectsComponent />
      <TestimonialsComponent />
      <OurStackComponent />
      <OurTeamComponent />
    </>
  )
}
export { PageMainContainer };
