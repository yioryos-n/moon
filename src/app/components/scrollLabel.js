import { useEffect, useState } from "react";

/*
    The scroll label is shown when the home page loads and is hidden when the user scrolls.
*/
export function ScrollLabel() {
  const [scrolled, setScrolled] = useState(false); //if scrolled is true the label is hidden

  //wheel event listener
  useEffect(() => {
    const handleWheel = () => {
      setScrolled(true);
    };

    window.addEventListener('wheel', handleWheel);

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <p
      className={`transition-opacity duration-700 ease-in-out ${
        scrolled ? 'opacity-0' : 'opacity-90'
      }`}
    >
      Scroll.
    </p>
  );
}