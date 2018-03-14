import React from "react";
import Link from "gatsby-link";
import Footer from '../components/Footer';

import './main.scss';

export default ({ children, data }) => (
  <div>
    <Link to={`/`}>
      <h3>
        {data.site.siteMetadata.title}
      </h3>
    </Link>
    <Link to={`/about/`}>
      About
    </Link>
    {children()}
    <Footer />
  </div>
);

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`