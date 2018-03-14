const cleanNav = data => {
  const { edges: nav } = data.allMarkdownRemark;
  return nav.map(({ node }) => {
    return {
      id: node.id,
      slug: node.fields.slug,
      title: node.frontmatter.title,
      lesson: node.frontmatter.lesson,
    }
  });
};

const cleanTags = data => {
  const { tags } = data.markdownRemark.frontmatter;
  if (!tags) return;
  return Object.values(tags).filter(tag => tag !== null);
}

export { cleanNav, cleanTags };