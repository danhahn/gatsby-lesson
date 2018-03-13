import React from 'react';
import classNames from 'classnames';

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
    <span>
      <code>{formattedItem}</code>
      {!isLast && `, `}
    </span>
  );
};

const Icon = ({type}) => {
  const iconClasses = classNames('fa', {
    "fa-html5": type === `html`,
    "fa-css3": type === `css`
  })
  return (
    <i className={iconClasses}/>
  )
};

const TagList = ({tags}) => {
  return (
    <div>
      {tags.map(({label, data}) => (
        <div key={label}>
          <h2>
            {label}
            <Icon type={label}/>
          </h2>
          {data.map((item, i) => (
            <TagItem
              item={item}
              type={label}
              key={item}
              isLast={data.length -1 === i}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default TagList;