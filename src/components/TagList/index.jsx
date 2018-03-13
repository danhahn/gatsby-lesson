import React from 'react';

const TagItem = ({item, type}) => {
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
  return (<code>{formattedItem}</code>)
};

const TagList = ({tags}) => {
  return (
    <div>
      {tags.map(({label, data}) => (
        <div key={label}>
          <h2>{label}</h2>
          {data.map((item, i) => <TagItem item={item} type={label} key={item}/>)}
        </div>
      ))}
    </div>
  );
};

export default TagList;