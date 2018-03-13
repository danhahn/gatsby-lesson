const cleanNav = data => {
  const { edges: nav } = data.allMarkdownRemark;
  return nav.map(({ node }) => {
    return {
      id: node.id,
      slug: node.fields.slug,
      title: node.frontmatter.title,
    }
  });
};

const cleanTags = data => {
  const { tags } = data.markdownRemark.frontmatter;
  return Object.values(tags);
}

export { cleanNav, cleanTags };