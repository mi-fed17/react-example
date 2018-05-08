import React from 'react';
import ListItem from './ListItem';

/* List component is only responsible for looping the items in the array
* and spitting out a 'List component' */
export default function List({ items }) {
  let list = items.map( (item, index) => {
    //When rendering components in a loop, we have to set
    //a key for every new item, just for React, just use index
    return <ListItem key={ index } item={item} />;
  });
  return(
    <ul>
      { list }
    </ul>
  );
}