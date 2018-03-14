import React from "react";
import Link from "gatsby-link";
import SideNav from '../components/SideNav';
import TagList from '../components/TagList';
import { cleanNav, cleanTags } from '../utils/cleanData';

import styles from './blog-post.module.scss';

export default ({ data }) => {
  const post = data.markdownRemark;
  const navItems = cleanNav(data);
  const tags = cleanTags(data);
  return (
    <div className={styles.blogPost}>
      <header className={styles.header}>
        <h1>{post.frontmatter.title}</h1>
      </header>
      <article className={styles.main}>
        <h1>{post.frontmatter.lesson}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
      <aside className={ styles.side }>
        <SideNav
          navItems={navItems}
        />
        {tags ? <TagList tags={tags} /> : null }
      </aside>
    </div>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String! $root: String!) {
    markdownRemark(fields: {slug: { eq : $slug}}) {
      html
      frontmatter {
        title
        lesson
        tags {
          html {
            label
            data
          }
          css {
            label
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
            lesson
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;