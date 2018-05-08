import React from 'react';
import Link from './Link';

export default function Navbar() {
  return (
    <aside className="navbar">
        <Link to="https://gist.github.com/jesperorb/33a84ea07295cb5a3bb30b180aa025d1" title="React Patterns" />
        <Link to="https://github.com/xat/react-component-composition-cheatsheet" title="React Composition" />
    </aside>
  );
}