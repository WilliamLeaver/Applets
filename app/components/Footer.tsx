import React from 'react';
import Link from 'next/link';
const Footer = () => {
  return (
    <footer className="rounded bg-neutral text-center p-2">
      <p className="">Hope you enjoy!</p>
      <Link className="btn rounded bg-secondary text-secondary-content" href="https://codepen.io/chalda/pen/wRJYmz">One div flame 🔥 | by: Chalda Pnuzig</Link>
      <Link className="btn rounded bg-secondary text-secondary-content" href="https://codepen.io/jkantner/pen/gKRKKb">CSS Blend Mode Fire | by: Jon Kantner </Link>
      <Link className="btn rounded bg-secondary text-secondary-content" href="https://apps.apple.com/us/app/a-dark-room/id736683061">Ember Inspiration | A Dark Room</Link>
      <p className="text-xs"></p>
    </footer>
  );
};

export default Footer;