import * as React from "react";
import { graphql, Link, PageProps } from "gatsby";
import Layout from "../layouts/Default";
import SEO from "../components/seo"
import { PrivacyPolicyPageContainer } from "../components/containers/PrivacyPolicyPage/PrivacyPolicyPage";



const PrivacyPolicyPage: React.FC<PageProps> = () => {
  
  return (
    <Layout>

      <SEO title="Tachos main" />
      <PrivacyPolicyPageContainer/>
    </Layout>
  )
}

export default PrivacyPolicyPage;
