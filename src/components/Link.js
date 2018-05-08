import React from 'react';

export default function Link({ to, title }) {
  return (
    <a href={ to }>
        { title }
    </a>
  );
}