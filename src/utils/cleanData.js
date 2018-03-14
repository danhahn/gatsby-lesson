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
  if (!tags) return null;
  return Object.values(tags);
}

export { cleanNav, cleanTags };