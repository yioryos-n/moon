import { useEffect, useState } from "react";

/*
    The scroll label is shown when the home page loads and is hidden when the user scrolls.
*/
export function ScrollLabel() {
  const [scrolled, setScrolled] = useState(false); //if scrolled is true the label is hidden

  //wheel event listener
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(true);
    };

    let touchStartY = 0;
    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      const touchY = e.touches[0].clientY;
      const deltaY = Math.abs(touchStartY - touchY);

      if (deltaY > 10) {
        setScrolled(true);
      }
    };

    window.addEventListener("wheel", handleScroll);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
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