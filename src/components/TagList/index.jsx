import React from 'react';
import Code from '../../components/Code';
import Badge from '../../components/Badge';
import classNames from 'classnames';
import styles from './tagList.module.css';

const TagItem = ({item, type, isLast}) => {
  let formattedItem = ``
  switch(type) {
    case `html`:
      formattedItem = `<${item}>`;
      break;
    case `css`:
      formattedItem = `${item}: {}`;
      break;
    default:
      formattedItem = item;
  };
  return (
    <span className={styles.TagList__listItem}>
      <Code>{formattedItem}</Code>
      {!isLast && `, `}
    </span>
  );
};

const Icon = ({type}) => {
  const iconClasses = classNames('fab', {
    "fa-html5": type === `html`,
    "fa-css3": type === `css`
  })
  return (
    <i className={iconClasses}/>
  )
};

const TagList = ({tags}) => {
  return (
    <div className={styles.TagList}>
      {tags.map(({label, data}) => (
        <div className={styles.TagList__item} key={label}>
          <Badge
            type={label}
            label={label}
            icon={<Icon type={label} />}
          />
          <div className={styles.TagList__list}>
            {data.map((item, i) => (
              <TagItem
                item={item}
                type={label}
                key={item}
                isLast={data.length -1 === i}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TagList;