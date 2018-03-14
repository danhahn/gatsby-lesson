import React from 'react';
import styles from './badge.module.css';

const Badge = ({label, icon, type}) => {
  const badgeClasses = [
    styles.Badge,
    type === `html` && styles.BadgeHtml,
    type === `css` && styles.BadgeCss,
  ].join(' ');

  return (
    <span className={badgeClasses}>
      {icon}
      <span className={styles.caps}>{label}</span>
    </span>
  );
};

export default Badge;