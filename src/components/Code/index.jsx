import React from 'react';
import styles from './code.module.css';
console.log(styles)


const Code = ({label, children}) => {
  return (
    <code className={styles.Code}>{label || children}</code>
  );
};

export default Code;