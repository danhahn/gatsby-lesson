import React from "react";
import Link from "gatsby-link";
import SideNav from '../components/SideNav';
import TagList from '../components/TagList';
import { cleanNav, cleanTags } from '../utils/cleanData';

export default ({ data }) => {
  const post = data.markdownRemark;
  const navItems = cleanNav(data);
  const tags = cleanTags(data);
  return (
    <div>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <SideNav
        navItems={navItems}
      />
      <TagList
        tags={tags}
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