import React from 'react';

/* This can be unessecary implementation. I personally think this component
* is too small. Can be added directly to the ListItem Component */
export default function ListItem({ item }) {
  return (
    <li>
        { item }
    </li>
  );
}