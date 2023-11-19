import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import '../main.scss';
import Hero from '../components/hero';
import InfiniteSlider from '../components/infiniteSlider';

function IndexPage() {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handler = (event) => {
      if (!menuRef.current.contains(event.target)) {
        setIsMenuActive(false);
      }
    };
    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, []);

  return (
    <>
      <InfiniteSlider />
      <Hero menuRef={menuRef} isMenuActive={isMenuActive} setIsMenuActive={setIsMenuActive} />
    </>
  );
}

export default IndexPage;

export function Head() {
  return <title>Home Page</title>;
}
