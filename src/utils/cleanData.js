const cleanNav = data => {
  return data.map(({ node }) => {
    return {
      id: node.id,
      slug: node.fields.slug,
      title: node.frontmatter.title,
    }
  });
};

const cleanTags = data => {
  // const {
  //   data,
  //   icon,
  //   label
  // } = markdownRemark.frontmatter.tags;
  return {
    data,
    icons,
    label,
  }
}

export { cleanNav, cleanTags };