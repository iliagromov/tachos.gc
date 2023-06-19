import * as React from "react";
import { graphql, Link, PageProps } from "gatsby";
import Layout from "../layouts/Default";
import SEO from "../components/seo"
import { PageMainContainer }  from "../components/containers/PageMain/PageMain";


// export const query = graphql`
//   query MyQuery {
//     allMarkdownRemark {
//       nodes {
//         id
//         frontmatter {
//           category
//           image
//           title
//           url
//         }
//       }
//     }
//   }
// `

const IndexPage: React.FC<PageProps> = () => {
  
  return (
    <Layout>

      <SEO title="Tachos main" />
      <PageMainContainer/>
    </Layout>
  )
}

export default IndexPage;
