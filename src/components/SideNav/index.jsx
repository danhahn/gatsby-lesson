import React from 'react';
import Link from "gatsby-link";

const SideNav = ({navItems}) => {
  return (
    <ul>
      {
        navItems.map(({id, slug, title}) => (
          <li key={id}>
            <Link to={slug}
              exact
              activeStyle={{
                color: 'red'
              }}
            >
              {title}
            </Link>
          </li>
        ))
      }

    </ul>
  );
};

export default SideNav;