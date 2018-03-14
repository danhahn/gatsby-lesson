import React from 'react';
import Link from "gatsby-link";
import styles from './sideNav.module.scss';
console.log(styles);


const SideNav = ({navItems}) => {
  return (
    <ul className={styles.sidenav}>
      {
        navItems.map(({id, slug, title}) => (
          <li key={id} className={styles.sidenav__item}>
            <Link to={slug}
              exact
              className={styles.sidenav__link}
              activeClassName={[styles.sidenav__link, styles.sidenav__link__active].join(' ')}
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