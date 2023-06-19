import * as React from "react";
import { graphql, Link, PageProps } from "gatsby";
import Layout from "../layouts/Default";
import SEO from "../components/seo"
import { ProjectPageContainer } from "../components/containers/ProjectPage/ProjectPage";
import path from "path";


export const query = graphql` 
  query MyQuery($url:String) {
    markdownRemark(frontmatter: { url: {eq: $url}}) {
      frontmatter {
        category
        url
        image {
            childImageSharp {
                gatsbyImageData(
                  formats:AUTO
                  placeholder:BLURRED
                )
            }
        }
        
        date
        title
        subtitle
        description
      }
    }
}`;
const ProjectPage: React.FC<PageProps> = ({
  path,
  uri,
  location,
  pageContext,
  data
}) => {
 
  const pageData = data?.markdownRemark?.frontmatter;
  return (
    <Layout>
      <SEO title={pageData.title} />
      <ProjectPageContainer
        path={path}
        uri={uri}
        location={location}
        pageContext={pageContext}
        data={pageData} 
        children={undefined} 
        params={undefined} 
        pageResources={{
          component: undefined,
          json: {
            data: undefined,
            pageContext: undefined
          },
          page: {
            componentChunkName: "",
            path: "",
            webpackCompilationHash: "",
            matchPath: undefined
          }
        }} 
        serverData={undefined}/>
    </Layout>
  )
}

export default ProjectPage;

