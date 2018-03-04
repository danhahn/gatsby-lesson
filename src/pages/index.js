import React from "react";
import Link from "gatsby-link";

export default ({data}) => (
  <div>
    <h1>HTML at SVA</h1>
    {
      data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link
            to={node.fields.slug}
          >
            <h3>
              {node.frontmatter.title}{" "}
              <span color="#BBB">— {node.frontmatter.date}</span>
            </h3>
            <p>{node.excerpt}</p>
          </Link>
        </div>
      ))
    }
  </div>
);

export const query = graphql`
  query IndexQuery {
  allMarkdownRemark(
    sort: {fields: [frontmatter___date], order: ASC}
    filter: { frontmatter: { index : { eq : true}}}
  ) {
    totalCount
    edges {
      node {
        id
        frontmatter {
          title
          date(formatString: "DD MMMM, YYYY")
        }
        fields {
          slug
        }
        excerpt
      }
    }
  }
}
`;