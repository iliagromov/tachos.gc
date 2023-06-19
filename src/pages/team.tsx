import * as React from "react";
import { graphql, Link, PageProps } from "gatsby";
import Layout from "../layouts/Default";
import SEO from "../components/seo"
import { TeamPageContainer } from "../components/containers/TeamPage/TeamPage";



const TeamPage: React.FC<PageProps> = () => {
  
  return (
    <Layout>

      <SEO title="Tachos main" />
      <TeamPageContainer/>
    </Layout>
  )
}

export default TeamPage;
