import React from "react";
import Link from "gatsby-link";
import SideNav from '../components/SideNav';
import { cleanNav } from '../utils/cleanData';

export default ({ data }) => {
  const post = data.markdownRemark;
  const { edges: nav } = data.allMarkdownRemark;
  const navData = cleanNav(nav);
  return (
    <div>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <SideNav
        navData={navData}
      />
    </div>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String! $root: String!) {
    markdownRemark(fields: {slug: { eq : $slug}}) {
      html
      frontmatter {
        title
        tags {
          html {
            label
            icon
            data
          }
          css {
            label
            icon
            data
          }
        }
      }
    }
    allMarkdownRemark(
      filter: { fields : { root : {eq : $root} } }
      sort: {fields: [frontmatter___order], order: ASC}
    ) {
      edges {
        node {
          id
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;