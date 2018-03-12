import React from "react";
import Link from "gatsby-link";

export default ({ data }) => {
  const post = data.markdownRemark;
  const { edges: nav } = data.allMarkdownRemark;
  return (
    <div>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <ul>
        {
          nav.map(({node}) => (
            <li>
              <Link to={node.fields.slug}
                exact
                activeStyle={{
                  color: 'red'
                }}
              >
                {node.frontmatter.title}
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String! $root: String!) {
    markdownRemark(fields: {slug: { eq : $slug}}) {
      html
      frontmatter {
        title
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